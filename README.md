[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-forms.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-forms) [![Coverage Status](https://coveralls.io/repos/markdalgleish/bespoke-forms/badge.png)](https://coveralls.io/r/markdalgleish/bespoke-forms)

# bespoke-forms

Form element support for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

Prevent keyboard events inside form elements from interacting with the presentation.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-forms/master/dist/bespoke-forms.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-forms/master/dist/bespoke-forms.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  forms = require('bespoke-forms');

bespoke.from('article', [
  forms()
]);
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.forms()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-forms
```

### Bower

```bash
$ bower install bespoke-forms
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
