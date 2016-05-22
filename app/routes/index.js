'use strict';

var path = process.cwd();
var apiController = require('../controllers/apiController');

module.exports = function (app) {

	app.route('/:timestamp')
	.get(apiController.getTimeStamp);
		
	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
};
