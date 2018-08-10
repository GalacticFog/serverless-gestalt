// Copyright (c) Galactic Fog Authors 2018. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const GestaltProvider = require('./provider');
const GestaltDeploy = require('./deploy');
// const GestaltRemove = require('./remove');
// const GestaltInvoke = require('./invoke');
// const GestaltPackage = require('./pack');

class GestaltIndex {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options;
		this.serverless.cli.log('Configuring Gestalt plugin(s)');

		this.serverless.pluginManager.addPlugin(GestaltProvider);
		this.serverless.pluginManager.addPlugin(GestaltDeploy);
		// this.serverless.pluginManager.addPlugin(GestaltRemove);
		// this.serverless.pluginManager.addPlugin(GestaltInvoke);
		// this.serverless.pluginManager.addPlugin(GestaltPackage);
	}
}

module.exports = GestaltIndex;

