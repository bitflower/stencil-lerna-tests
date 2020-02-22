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
npm run test
```

## The error

![alt](<[https://link](https://github.com/bitflower/stencil-lerna-tests/raw/master/Bildschirmfoto%202020-02-22%20um%2002.19.39.png)>)

The only files the string `"version": "3.7.5"` is contained are these:

![alt](<[[https://link](https://github.com/bitflower/stencil-lerna-tests/raw/master/Bildschirmfoto%202020-02-22%20um%2002.19.39.png](https://github.com/bitflower/stencil-lerna-tests/raw/master/Bildschirmfoto%202020-02-22%20um%2002.19.15.png))>)
