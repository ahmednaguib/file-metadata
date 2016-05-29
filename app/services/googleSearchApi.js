'use strict';
 var rest = require('restler');

exports.searchWithKeyWord = function(keyword){
    if(!keyword){
        return [];
    }
    var apiKey = process.argv.GOOGLE_API_KEY;
    var baseUrl = process.argv.GOOGLE_BASE_API_URL;
    var url = baseUrl + "?safe=medium&searchType=image&key="+ apiKey+"&q=" + keyword;
    
    rest.get(url).on('complete', function(result) {
        
      if (result instanceof Error) {
        console.log('Error:', result.message);
        this.retry(2000); // try again after 5 sec
      } else {
        console.log(result);
        return result;
      }
    });
};

