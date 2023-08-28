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

## Prettier

To use the Prettier config, add the following line to `.prettierrc`:

```
"@motionhungry/style-policy/prettier"
```

## TypeScript

The TypeScript configs are available for generic TypeScript projects, React and Next.js.

Depending on the type of your project, and the following to `tsconfig.json`.

### Generic TypeScript Package (default)

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
