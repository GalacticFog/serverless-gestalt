// Copyright (c) Gestalt Authors 2018. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const Gestalt = require('./lib');

let gestalt = new Gestalt(
    { pluginManager: {
         setProvider: () => {}, addPlugin() {} 
        } 
    }, {})
console.log(gestalt);
