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
* Docker 17.05+
* Gestalt Platform & Fog CLI

Installation:

* Serverless Inc CLI (sls)

```
npm i -g serverless
```

* Get the Gestalt CLI:

> Note: until 0.6.9 of the CLI is released you will need to rebuild it from source. `git clone https://github.com/gestalt/fog` and `cd fog && ./build_redist.sh`

```
$ curl -sSL https://cli.gestalt.com | sudo sh
```

Or install via npm `npm install fog-cli`.

* Get gestalt

You can deploy gestalt locally or remotely with Docker Swarm or Kubernetes. [See the documentation](https://docs.gestalt.com/)

## Getting started

* Get this plugin

```
$ git clone https://github.com/gestalt/serverless-gestalt
```

Link the plugin so it's available to Node:

```
$ ./prep.sh
```

* Test the happy-path: build/deploy/list/invoke/remove

```
$ ./install-plugin.sh
```

## Supported commands

```
sls deploy
sls deploy function -f <your-function>
```
### In progess

```
sls package
sls deploy list
sls invoke -f <your-function> -d <your-data> # -d flag optional
sls remove
```

## Contributing
TBD