# Join The Rebellion

## Description

This is a Vue 3 project using the Composition API. It's a product overview application with the ability to view product
details and manage wish lists.

## Prerequisites

- Node.js
- Yarn
- JetBrains WebStorm(recommended)

## Installation

1. Clone the repository to your local machine.
2. Open the project in JetBrains WebStorm.
3. Install the project dependencies by running `yarn install` in the terminal.

## Running the Project

- To start the development server, run `yarn dev` in the terminal.
- To build the project for production, run `yarn build`.
- To preview the production build, run `yarn preview`.
- To start the development server with host option, run `yarn host`.
- To lint the project, run `yarn lint`.
- To format the source code, run `yarn format`.
- To start the JSON server, run `yarn db`.

## Routes

The application has the following routes:

- `/` - Redirects to `/product-overview`.
- `/product-overview` - Displays the product overview.
- `/product-details/:id` - Displays the details of a specific product.
- `/wish-lists` - Displays the user's wish lists.
- `/wish-lists/:id` - Allows the user to edit a specific wish list.
- `/:pathMatch(.*)*` - Displays a 404 page for any unmatched routes.

## Dependencies

This project uses several dependencies, including:

- Vue 3
- Vue Router 4
- FontAwesome
- json-server for a fake REST API
- eslint and prettier for linting and formatting
- vite for a build tool
- TypeScript

For a full list of dependencies, refer to the `package.json` file.

## Author

Caspar Boetes

## Version

0.0.1

Please feel free to submit issues and pull requests. Enjoy coding! 😊

# Some words by: Evan You

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue
3 `<script setup>` SFCs, check out
the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (
  and disable
  Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for
type checking. In editors, we
need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented
a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more
performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
