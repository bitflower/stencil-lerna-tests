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

![https://link](https://github.com/bitflower/stencil-lerna-tests/raw/master/Bildschirmfoto%202020-02-22%20um%2002.19.39.png)

The only files the string `"version": "3.7.5"` is contained are these:

![[https://link](https://github.com/bitflower/stencil-lerna-tests/raw/master/Bildschirmfoto%202020-02-22%20um%2002.19.39.png](https://github.com/bitflower/stencil-lerna-tests/raw/master/Bildschirmfoto%202020-02-22%20um%2002.19.15.png)

Not sure where this is coming from and I also think it's not a transpile issue of some non compatible dependencies. Not a pro though...
