# NX MFE PoC (angular and ngrx)

## Components
- nx
- module federation
- angular
- sharing state management by ngrx
- sharing access token cross micro frontends
- example how to expose and use Module and Component
- dynamic loading exposed component

## Login credential
```
demo/demo
```

## Install
Run `npm install`

## Run all micro frontends

Run `npm start` or `nx run shell:serve-mfe`

## Add new frontend

Run `npx nx g @nrwl/angular:app [frontend name] --mfe --mfeType=remote --port=[port number] --host=shell --routing=true` to generate new frontend.

> for example `npx nx g @nrwl/angular:app shopping --mfe --mfeType=remote --port=5000 --host=shell --routing=true`

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
