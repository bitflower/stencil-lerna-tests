# Stencil monorepo with Lerna + Typescript Project References = failing tests

Demonstrates the `Unexpected token :` error that is thrown when running even simple tests.

## Setting up this repo

```terminal
git clone https://github.com/bitflower/stencil-lerna.git
cd stencil-lerna-tests
npm install
lerna bootstrap
npm run build
cd packages/design-system
npm run test
cd ..
cd ..
lerna bootstrap
cd packages/design-system
npm run test.spec
```

## The error

![https://link](https://github.com/bitflower/stencil-lerna-tests/raw/master/Bildschirmfoto%202020-02-24%20um%2021.34.10.png)
