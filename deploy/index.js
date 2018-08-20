// Copyright (c) Gestalt Authors 2018. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const {spawn} = require('child_process');
const _ = require('lodash');
const BbPromise = require('bluebird');
const promisify = require('../promisify-spawn');
const listeners = require('../spawn-listener');

class GestaltDeploy {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options || {};
		this.provider = this.serverless.getProvider('gestalt');
		this.commands = {
			deploy: {
				usage: 'Deploy Gestalt functions',
				lifecyleEvents: [
					'deploy'
				],
				options: {
					function: {
						usage: 'Deploy a single Gestalt function',
						shortcut: 'f'
					}
				},
				commands: {
					function: {
						usage: 'Deploy a single function',
						lifecycleEvents: [
							'function'
						],
						shortcut: 'f'
					},
					// list: {
					// 	usage: 'List all Gestalt functions',
					// 	lifecycleEvents: [
					// 		'list'
					// 	],
					// 	shortcut: 'l'
					// }
				}
			}
		};

		this.hooks = {
			'deploy:deploy': () => BbPromise.bind(this).then(this.deployFunction),
			'deploy:function:function': () => BbPromise.bind(this).then(this.deploySingleFunction),
			'deploy:list:list': () => BbPromise.bind(this).then(this.deployList)
		};
	}

	deployFunction() {
		return new BbPromise(resolve => {

			const faasCli = spawn('fog', [
				'service',
				'deploy',
				'-f', 'serverless.yml'
			]);

			promisify(faasCli, this)
				.then(res => this.serverless.cli.log(`Function(s) deployed...`))
				.then(() => resolve())
				.catch(err => this.serverless.cli.log(err));

			listeners(faasCli);
		});
	}

	deploySingleFunction() {
		return new BbPromise(resolve => {
			const faasCli = spawn('fog', [
				'service',
				'deploy',
				'-f', 'serverless.yml',
				'--filter', this.options.function
			]);

			promisify(faasCli)
				.then(res => this.serverless.cli.log(`Deployed ${this.options.function}`))
				.then(() => resolve())
				.catch(err => this.serverless.cli.log(err));

			listeners(faasCli);
		});
	}

	deployList() {
		return new BbPromise(resolve => {
			const faasCli = spawn('fog', ['list', "-f", "./serverless.yml"]);

			promisify(faasCli)
				.then(() => resolve())
				.catch(err => this.serverless.cli.log(err));

			listeners(faasCli);
		});
	}
}

module.exports = GestaltDeploy;
