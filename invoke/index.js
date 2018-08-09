// Copyright (c) Gestalt Authors 2018. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const { spawn } = require('child_process');
const BbPromise = require('bluebird');
const promisify = require('../promisify-spawn');
const listeners = require('../spawn-listener');

class GestaltInvoke {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options || {};
        this.provider = this.serverless.getProvider('gestalt');
        this.command = {
            invoke: {
                lifecycleEvents: [
                    'invoke'
                ],
                options: {
                    data: {
                        shortcut: 'd'
                    }
                }
            }
        };

        this.hooks = {
            'invoke:invoke': () => BbPromise.bind(this).then(this.invokeFunction)
        };

        //		This.serverless.cli.log('Configuring FaaS Invoke plugin');
    }

    invokeFunction() {
        return new BbPromise(resolve => {
            this.serverless.cli.log('Attempting to invoke ' + this.options.function);
            const args = this.options.data || '';

            const echo = spawn('echo', [args]);
            const faasCli = spawn('fog', ['invoke', this.options.function, "-f", "./serverless.yml"]);

            echo.stdout.pipe(faasCli.stdin);

            promisify(faasCli)
                .then(res => this.serverless.cli.log(`Function ${this.options.function} has been invoked`))
                .then(() => resolve())
                .catch(err => this.serverless.cli.log(err));

            listeners(faasCli);
        });
    }
}

module.exports = GestaltInvoke;