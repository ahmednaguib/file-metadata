'use strict';

var searchItem = require('../models/searchItem');
var googleSearch = require('../services/googleSearchApi');

exports.imagesearch = function(req, res, next) {
    
    var printResponse = function(result){
     if (result instanceof Error) {
        console.log('Error:', result.message);
      } else {
        var items = result.items;
        var responseArray = [];
        items.forEach(function(item) {
            responseArray.push({
            'title': item.title, 
            'url': item.link, 
            'thumbnail': item.image.thumbnailLink,
            'context': item.image.contextLink
            });
        });
        res.json(responseArray);
      }
    };
    
    var keyword = req.params.keyword;
    googleSearch.searchWithKeyWord(keyword, printResponse);
};
