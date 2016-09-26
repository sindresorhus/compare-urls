'use strict';
var normalizeUrl = require('normalize-url');

module.exports = function (a, b, options) {
	if (a === b) {
		return true;
	}
	
	var opts = Object.assing({}, options);
	return normalizeUrl(a, opts) === normalizeUrl(b, opts);
};
