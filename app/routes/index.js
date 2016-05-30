'use strict';

var path = process.cwd();
var apiController = require('../controllers/apiController');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = function (app, db) {
	app.post('/fileanalyze', upload.single('files') , apiController.fileAnalyze);

	app.route('/')
	.get(function(req,res) {
		res.sendFile(path + '/public/index.html');
	});
};
