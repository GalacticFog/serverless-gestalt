// Copyright (c) Gestalt Authors 2018. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';
const expect = require('chai').expect;

describe('Gestalt provider', () => {
    const Gestalt = require('./lib');

    it('creates a new instance', () => {
        const serverless = {
            pluginManager: {
                setProvider: () => {},
                addPlugin() {}
            },
            cli: {
                log: console.log
            }
        };
        const opts = {};
        const gestalt = new Gestalt(serverless, opts);
        expect(gestalt).to.exist;
        expect(gestalt.serverless).to.exist;
    });
});
