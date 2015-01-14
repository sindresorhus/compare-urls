# compare-urls [![Build Status](https://travis-ci.org/sindresorhus/compare-urls.svg?branch=master)](https://travis-ci.org/sindresorhus/compare-urls)

> Compare URLs by first [normalizing](https://github.com/sindresorhus/normalize-url) them


## Install

```
$ npm install --save compare-urls
```


## Usage

```js
var compareUrls = require('compare-urls');

compareUrls('HTTP://sindresorhus.com/?b=b&a=a', 'sindresorhus.com/?a=a&b=b');
//=> true
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
