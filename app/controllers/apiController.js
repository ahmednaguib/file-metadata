'use strict';

var Url = require('../models/urls');

exports.redirectUrl = function(req, res, next) {
    var key = req.params.id;
    console.log('trying to find:' + key);
    Url.findById(key, function (err, url) {
    if (err) return next(err);
        if(url){
            res.redirect(url.url);
        }else{
            res.json({ 'error': 'Invalid value'});
        }
    });
};

exports.shortenUrl = function(req, res) {
    var urlParameter = req.params[0];
    var validUrl = require('valid-url');
  
    var baseUrl = process.env.APP_URL;
    if (validUrl.isUri(urlParameter)){
        Url.findOne({url : urlParameter}, function (err, url) {
        if (err) return next(err);
            if(url){
                res.json({ 'shortUrl': baseUrl + 'r/' + url._id });
            }else{
                Url.create({ url: urlParameter }, function (err, url) {
                  if (err) return console.log(err);
                  // saved!
                  res.json({ 'shortUrl': baseUrl + 'r/' + url._id });
                })
            }
        });
    }else{
        res.json({ 'error': 'Invalid Url'});
    }
};

