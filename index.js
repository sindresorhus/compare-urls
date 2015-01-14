'use strict';
var normalizeUrl = require('normalize-url');

module.exports = function (a, b) {
	if (a === b) {
		return true;
	}

	return normalizeUrl(a) === normalizeUrl(b);
};
