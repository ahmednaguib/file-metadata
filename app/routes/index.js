'use strict';

var path = process.cwd();
var apiController = require('../controllers/apiController');

module.exports = function (app, db) {
	app.route('/imagesearch/:keyword')
	.get(apiController.imagesearch);

};
