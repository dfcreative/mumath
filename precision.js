/**
 * @module  mumath/precision
 *
 * Get precision from float:
 *
 * @example
 * 1.1 → 1, 1234 → 0, .1234 → 4
 *
 * @param {number} n
 *
 * @return {number} decimap places
 */
'use strict';

module.exports = function(n){
	var remainder = n % 1;
	var s = remainder + '',
		d = s.indexOf('.') + 1;

	if (d) return s.length - d;

	var e = s.indexOf('e-');

	if (e >= 0) return parseInt(s.substring(e+2));

	return 0;
};
