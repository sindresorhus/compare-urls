# compare-urls

> Compare URLs by first [normalizing](https://github.com/sindresorhus/normalize-url) them

## Install

```
$ npm install compare-urls
```

## Usage

```js
import compareUrls from 'compare-urls';

compareUrls('HTTPS://sindresorhus.com/?b=b&a=a', 'sindresorhus.com/?a=a&b=b');
//=> true
```
