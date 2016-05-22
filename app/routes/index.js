'use strict';

var path = process.cwd();
var apiController = require('../controllers/apiController');

module.exports = function (app, db) {
	app.route('/r/:id')
	.get(apiController.redirectUrl);

	app.route('/*')
	.get(apiController.shortenUrl);

};
