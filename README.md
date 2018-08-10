This is an Gestalt plugin for the Serverless Inc framework.

# serverless-gestalt
Work remaining:

* [ ] Documentation on using gestalt with the Serverless Inc framework
* [ ] Validation of plugin from Serverless Inc team
* [ ] Validation of [node.js template](https://github.com/gestalt/serverless-gestalt-nodejs) from Serverless Inc team
* [ ] Breaking out of SDK for spawning `fog`

## Pre-reqs

* [Node.js 8.11.3 or newer](https://nodejs.org/en/download/)
* Serverless Inc CLI (sls)
* Gestalt Platform & Fog CLI

Installation:

* Serverless Inc CLI (sls)
Currently you need a local build of serverless


```
npm i -g serverless
```

* Get the Gestalt CLI:

https://github.com/GalacticFog/gestalt-fog-cli

Or install via npm `npm install fog-cli`.

* Get gestalt

You can deploy gestalt locally using Docker CE. [See the documentation](http://docs.galacticfog.com/install/kubernetes/readme_docker_ce_for_desktop/)(https://docs.gestalt.com/)

## Getting started

* Get this plugin

```
$ git clone https://github.com/GalacticFog/serverless-gestalt
```

Link the plugin so it's available to Node:

```
$ npm run install
```

* Test the happy-path: build/deploy/list/invoke/remove

```
$ npm test
```

## Supported commands

```
sls deploy
```
### In progress

```
sls deploy function -f <your-function>
sls package
sls deploy list
sls invoke -f <your-function> -d <your-data> # -d flag optional
sls remove
```

## Contributing
TBD