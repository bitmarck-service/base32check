[![Apache License 2.0](https://img.shields.io/github/license/bitmarck-service/base32check.svg?maxAge=3600)](https://www.apache.org/licenses/LICENSE-2.0)

# base32check

Website for the base32 checksum algorithm.

https://base32check.org

## Git Flow

This repository uses [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
Please make sure to have the [Git Flow (AVH Edition)](https://github.com/petervanderdoes/gitflow-avh) extension
installed in Git.
Once the extensions are [installed](https://github.com/petervanderdoes/gitflow-avh/wiki/Installation), you can
initialize your cloned repository for Git Flow using:

    git flow init --defaults --tag v

To start a feature branch:

    git flow feature start <feature-name>

To finish a feature branch:

    git flow feature finish [<feature-name>]

For a general introduction, please read this [blog posting](https://jeffkreeftmeijer.com/git-flow/).

## Prerequisites

+ [Node.js](https://www.node.js/)
+ [Yarn](https://yarnpkg.com/)

It is recommended to use this repository with Linux or macOS.
Windows may work, but is generally not supported.

    $ npm install

## Development

This repository uses [VuePress](https://vuepress.vuejs.org/).
To start a local development server:

    $ npm run docs:dev

## Build

To build the static site:

    $ npm run docs:build

## Deployment

Every commit on the master branch gets automatically deployed to [base32check.org](https://base32check.org).
