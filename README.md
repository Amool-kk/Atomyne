# Atomyne UI Monorepo

Atomyne is a pnpm workspace for a small design-system stack: framework-agnostic style primitives, React components, and Storybook documentation.
It currently ships core UI atoms (`Button`, `Input`, `Label`, `Badge`) with typed variant APIs.
This repository is in an early stage (`0.0.1` packages) and optimized for local development.

## What's Inside

- `@atomyne/ui-core` (`packages/core`): framework-agnostic variant/style contracts and shared utilities.
- `@atomyne/ui-react` (`packages/react`): React component implementations built on `ui-core`.
- `@atomyne/ui` (`packages/docs`): Storybook app used to preview and document components.

## Tech Stack

- TypeScript
- React 19
- Tailwind CSS
- Storybook 8
- tsup
- Vitest
- pnpm workspaces

## Prerequisites

- Node.js `>=18.0.0`
- pnpm `9.x`

## Getting Started

```bash
pnpm install
pnpm dev
```

`pnpm dev` builds `@atomyne/ui-core` and `@atomyne/ui-react`, then starts Storybook at `http://localhost:6006`.

Common commands:

```bash
pnpm build
pnpm test
pnpm lint
```

## Workspace Scripts

| Script | What it does |
| --- | --- |
| `pnpm dev` | Builds `ui-core` and `ui-react`, then runs Storybook in `packages/docs` |
| `pnpm build` | Runs `build` recursively in all workspace packages |
| `pnpm test` | Runs `test` recursively in all workspace packages |
| `pnpm lint` | Runs `lint` recursively in all workspace packages |

## Package Scripts

### `@atomyne/ui-core` (`packages/core`)

- `pnpm --filter @atomyne/ui-core build` - Build package with `tsup`
- `pnpm --filter @atomyne/ui-core dev` - Watch mode build with `tsup --watch`
- `pnpm --filter @atomyne/ui-core test` - Run tests with Vitest
- `pnpm --filter @atomyne/ui-core lint` - Type-check with `tsc --noEmit`

### `@atomyne/ui-react` (`packages/react`)

- `pnpm --filter @atomyne/ui-react build` - Build package with `tsup`
- `pnpm --filter @atomyne/ui-react dev` - Watch mode build with `tsup --watch`
- `pnpm --filter @atomyne/ui-react test` - Run tests with Vitest
- `pnpm --filter @atomyne/ui-react lint` - Type-check with `tsc --noEmit`

### `@atomyne/ui` (`packages/docs`)

- `pnpm --filter @atomyne/ui storybook` - Start Storybook dev server
- `pnpm --filter @atomyne/ui build-storybook` - Build static Storybook output

## Using the Packages

Install React components:

```bash
pnpm add @atomyne/ui-react tailwindcss
```

Install core styling contracts:

```bash
pnpm add @atomyne/ui-core tailwindcss
```

Example with React components:

```tsx
import { Badge, Button, Input, Label } from "@atomyne/ui-react";

export function ExampleForm() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="email" required>
        Email
      </Label>
      <Input id="email" type="email" placeholder="you@company.com" variant="primary" />
      <div className="flex items-center gap-2">
        <Button variant="primary">Submit</Button>
        <Button variant="outline" loading>
          Saving
        </Button>
        <Badge variant="success">Verified</Badge>
      </div>
    </div>
  );
}
```

Tailwind/theme note:

- Components rely on Tailwind utility classes and tokenized CSS variables such as `--primary`, `--border`, `--success`, and related foreground tokens.
- The Storybook baseline tokens are defined in `packages/docs/src/globals.css` and can be used as a reference.

## Component Surface

- `Button`
- Variants: `primary`, `secondary`, `outline`, `ghost`, `link`, `destructive`
- Sizes: `sm`, `md`, `lg`, `icon`
- Supports `loading` and `disabled`

- `Input`
- Variants: `primary`, `destructive`, `success`
- Sizes: `sm`, `md`, `lg`

- `Label`
- Supports `required` and `disabled`

- `Badge`
- Variants: `primary`, `secondary`, `outline`, `destructive`, `success`, `warning`

## Project Structure

```text
.
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── packages
    ├── core
    ├── react
    └── docs
```

## Development Notes

- Storybook stories live in `packages/docs/stories`.
- `@atomyne/ui-react` depends on `@atomyne/ui-core` via the workspace protocol (`workspace:*`).
- Build outputs are emitted to each package's `dist/` directory.

## Current Status

- Package versions are currently `0.0.1`.
- This is an early-stage design system; APIs may evolve.
