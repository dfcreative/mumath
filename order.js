/**
 * @module mumath/order
 */
module.exports = require('./wrap')(function (n) {
	n = Math.abs(n);
	var order = Math.floor(Math.log(n) / Math.LN10 + 0.000000001);
	return Math.pow(10,order);
});