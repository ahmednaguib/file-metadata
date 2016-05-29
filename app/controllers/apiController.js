'use strict';

var SearchItem = require('../models/searchItem');
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
    var offset = req.query.offset;
    
    if(!isNaN(offset) && offset > 0){
        offset--;
    }else{
        offset = 0;
    }
    
    if(!keyword){
        return res.json({'error':'Invalid search keyword'});
    }
    
    // store search in database
    var searchItemObj = new SearchItem();
    searchItemObj.keyword = keyword;
    searchItemObj.save();
    
    // make the call
    googleSearch.searchWithKeyWord(keyword, offset, printResponse);
};

exports.latestSearches = function(req, res) {
    var q = SearchItem.find().sort({'createdAt': -1}).limit(10);
    q.exec(function(err, latest) {
        var responseArray = [];
        latest.forEach(function(item) {
            responseArray.push({
            'keyword': item.keyword,
            'createdAt': item.createdAt
            });
        });
        res.json(responseArray);
    });
}