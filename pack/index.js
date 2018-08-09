// Copyright (c) Gestalt Authors 2018. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const {spawn} = require('child_process');
const _ = require('lodash');
const BbPromise = require('bluebird');
const promisify = require('../promisify-spawn');
const listeners = require('../spawn-listener');

class GestaltPackage {
	constructor(serverless, options = {}) {
		this.serverless = serverless;
		this.options = options;
		this.provider = this.serverless.getProvider('gestalt');
		this.commands = {
			package: {
				lifecycleEvents: [
					'package'
				],
				usage: 'Bundle function for deployment on Gestalt'
			}
		};
		this.serverless.cli.log('Loading GestaltPackage');

		this.hooks = {
			'before:package:createDeploymentArtifacts': () => BbPromise.bind(this)
			.then(this.packageFunction),
		};
	}

	packageFunction() {
		return new BbPromise(resolve => {

			this.serverless.cli.log('Running packageFunction');

			_.each(this.serverless.service.functions, (description, name) => {
				this.serverless.cli.log('Attempting to package ' + name);

				const faasCli = spawn('fog', ['pack', '-f', './serverless.yml']);

				promisify(faasCli)
					.then(res => this.serverless.cli.log(`Function ${name} has been packaged`))
					.then(() => resolve())
					.catch(err => this.serverless.cli.log(err));

				listeners(faasCli);
			});
		});
	}
}

module.exports = GestaltPackage;
