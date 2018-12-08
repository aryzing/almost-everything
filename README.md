# almost-everything

App to help with the hiring and onboarding of crew personnel.

# How Webpack is used

This project uses WDS to serve the application assets during development. A productiong bundle can also be generated using the `build` script, however, a production server has not been implemented and is considered outside the scope of this assignment.

We're using Webpack's Node API for greater control.

Webpack files use TypeScript, and are transpiled with `build-builder`. All checks and strict rules are enables to ensure robust code, and the target ES version is set to 2018 which is the highest supported by [recent versions](https://node.green/#ES2018) of Node.

# Scripts

- `prebuild`: ensures Webpack config has been transpiled to JS
- `build`: creates a production-ready bundle
- `build-builder`: transpiles Webpack files
- `prerun-builder`: ensures Webpack config has been transpiled to JS
- `run-builder`: builds the app and runs WDS
- `lint`: lints (and fixes) using tslint
- `format`: formats (and fixes) using prettier
- `lintAndFormat`: linting and formatting in one command

# Linting and formatting

## tslint

Using recommended settings with prettier formatting exclusion rules.

## prettier

Prettier is configured with

- `singleQuote=true` to for quicker visual differentiation between JS strings and JSX html attributes.
- `trailingComma=all` to avoid lines showing up as modified when new object properties are added.
