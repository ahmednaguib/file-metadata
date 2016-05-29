'use strict';

var searchItem = require('../models/searchItem');
var googleSearch = require('../services/googleSearchApi');

exports.imagesearch = function(req, res, next) {
    var keyword = req.params.keyword;
    var results = googleSearch.searchWithKeyWord(keyword);
    res.json(results);
};