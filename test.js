'use strict';
var test = require('ava');
var compareUrls = require('./');

test(function (t) {
	t.assert(compareUrls('http://sindresorhus.com', 'http://sindresorhus.com/'));
	t.assert(compareUrls('http://sindresorhus.com', '//sindresorhus.com'));
	t.assert(compareUrls('http://sindresorhus.com', 'sindresorhus.com'));
	t.assert(compareUrls('HTTP://sindresorhus.com/?b=b&a=a', 'sindresorhus.com/?a=a&b=b'));
	t.end();
});
