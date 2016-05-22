'use strict';

var Url = require('../models/urls');

exports.redirectUrl = function(req, res) {
    var key = req.params.id;
    console.log('trying to find:' + key);
    var result = Url.findById(key);
    console.log(result);
    res.json(result);
};

exports.shortenUrl = function(req, res) {
    var url = req.params[0];
    var validUrl = require('valid-url');
  
    var baseUrl = process.env.APP_URL;
    if (validUrl.isUri(url)){
        var newUrl = new Url();
        newUrl.url = url;
        newUrl.save();
        res.json({ 'shortUrl': baseUrl + 'r/' + newUrl._id});
    }else{
        res.json({ 'error': 'Invalid Url'});
    }
};

