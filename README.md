# Motion Hungry Code Style Policy

## Overview

This repository contains configurations for Motion Hungry's code style policies on TypeScript projects.

- Prettier
- TypeScript

## Installation

All of the configs are found in the `@motionhungry/style-policy` on NPM registry.

```
pnpm add -D @motionhungry/style-policy
```

## ESLint

The ESLint configs are setup to be composable depending on the features of your project.

The following base configs are available. You can use one or both, but they should be first in `extends`:

- `@motionhungry/style-policy/eslint/browser`
- `@motionhungry/style-policy/eslint/node`

The following configs are also available:

- `@motionhungry/style-policy/eslint/typescript`

### TypeScript/Node.js Package (default)

```
module.exports = {
  extends: ['@motionhungry/style-policy/eslint/react'],
}
```

### Next.js

```
module.exports = {
  extends: ['@motionhungry/style-policy/eslint/nextjs'],
}
```

## Prettier

To use the Prettier config, add the following line to `.prettierrc`:

```
"@motionhungry/style-policy/prettier"
```

## TypeScript

The TypeScript configs are available for general TypeScript/Node.js projects, React and Next.js.

Depending on the type of your project, add the following to `tsconfig.json`.

### TypeScript/Node.js Package (default)

```
{
"extends": "@motionhungry/style-policy/tsconfig/default.json"
}
```

### React

```
{
"extends": "@motionhungry/style-policy/tsconfig/react.json"
}
```

### Next.js

```
{
"extends": "@motionhungry/style-policy/tsconfig/nextjs.json"
}
```
