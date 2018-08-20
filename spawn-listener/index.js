// Copyright (c) Gestalt Authors 2018. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const spawnListener = spawn => {
	spawn.stdout.on('data', data => console.log(data.toString('utf8')));
	spawn.stderr.on('data', data => console.log(data.toString('utf8')));
};

module.exports = spawnListener;
