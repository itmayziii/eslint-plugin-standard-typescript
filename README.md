[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

# eslint-plugin-standard-typescript

:rotating_light: **DEPRECATED** :rotating_light:

**Please instead use the [config](https://www.npmjs.com/package/eslint-config-standard-with-typescript) that is
maintained by the [standard](https://standardjs.com/) team.**

---

Standard JS with Typescript playing nice with each other.

Some of the ESLint rules between Typescript and Standard overlap or contradict each other. This package combines the 2 configurations and
defaults to accepting the Standard JS config over the typescript config when rules overlap.   

## Installation

You'll first need to install [ESLint](http://eslint.org) as well as all the configs and plugins that Standard and Typescript need.
Unfortunately it is not possible to have a plugin use another plugin as a dependency. It is [recommended by ESLint](https://github.com/eslint/eslint/issues/3458)
to use peerDependencies instead which is why you are installing so many packages below. 

```
npm i eslint eslint-plugin-standard-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install the other packages above globally.

## Usage

Add `plugin:standard-typescript/recommended` to the extends section of your ESLint configuration file.

```json
{
    "extends": ["plugin:standard-typescript/recommended"]
}
```
