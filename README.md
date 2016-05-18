# grunt-react-boilerplate [![Build Status](https://travis-ci.org/padsbanger/grunt-react-boilerplate.svg?branch=master)](https://travis-ci.org/padsbanger/grunt-react-boilerplate)

My boilerplate for starting React.js ES2015 based applications.

It uses Babel & Browserify to handle modules and compile them into plain clean Javascript, LESS for CSS.

## Installing
```js
npm install -g grunt-cli
```

## Running
```js
grunt
```

## Building for production
```js
grunt build
```

## Running tests
```js
npm test
```

## Project structure

Put your JS code into  `src/js` directory. It will be automatically picked by `Grunt Watch` and bundeled into `dist` directory as `app.js`. Put all you `LESS` files into `src/less` and it will be compiled to `dist/styles.less`.

In order to create production ready build just run `grunt build` and change js src in `index.html` to point to `dist/app.min.js`.
