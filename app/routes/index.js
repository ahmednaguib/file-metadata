'use strict';

var path = process.cwd();
var apiController = require('../controllers/apiController');

module.exports = function (app, db) {
	app.route('/r/:id')
	.get(apiController.redirectUrl);

	app.route('/')
	.get(function(req,res) {
		res.sendFile(path + '/public/index.html');
	});
	
	app.route('/*')
	.get(apiController.shortenUrl);

};
