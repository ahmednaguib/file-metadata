'use strict';

var rest = require('restler');

var limit = 10;

exports.searchWithKeyWord = function(keyword, page ,callback){
    if(!keyword){
        callback([]);
        return;
    }
    var start = (page * limit ) + 1;
    
    var apiKey = process.env.GOOGLE_API_KEY;
    var baseUrl = process.env.GOOGLE_BASE_API_URL;
    var url = baseUrl + "?safe=medium&searchType=image&key="+ apiKey+"&q=" + keyword + "&start=" + start;
    
    rest.get(url).on('complete', function(data) {
      callback(data);
      return;
    });
};

