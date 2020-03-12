# Stencil monorepo with Lerna + Typescript Project References = failing tests

Demonstrates the `Can't find module ...` error that is thrown when running `spec` tests.

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
npm run jest
```

## The error

![https://link](https://github.com/bitflower/stencil-lerna-tests/raw/master/Bildschirmfoto%202020-02-24%20um%2021.34.10.png)
