'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var Url = new Schema({
		_id: {
		    type: String,
		    'default': shortid.generate
		},
		url: String
});

module.exports = mongoose.model('Url', Url);
