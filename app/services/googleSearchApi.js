'use strict';

var rest = require('restler');

exports.searchWithKeyWord = function(keyword ,callback){
    if(!keyword){
        callback([]);
        return;
    }
    var apiKey = process.env.GOOGLE_API_KEY;
    var baseUrl = process.env.GOOGLE_BASE_API_URL;
    var url = baseUrl + "?safe=medium&searchType=image&key="+ apiKey+"&q=" + keyword;
    rest.get(url).on('complete', function(data) {
      callback(data);
      return;
    });
};

