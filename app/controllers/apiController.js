'use strict';

exports.getTimeStamp = function(req, res) {
    // Create a new instance of the Beer model
    var timestamp = decodeURI(req.params.timestamp);
        
    var natural = null;
    var unix = null;
    var isTimeStamp = false;
	
	var date;
    if(isNaN(timestamp)){
        date = new Date(Date.parse(timestamp));
    }else{
        isTimeStamp = true;
        date = new Date(parseInt(timestamp)*1000);
    }
	
    if(date != "Invalid Date" && date instanceof Date)
    {
        var month = date.getMonth();
        var day = date.getDay();
        var year = date.getFullYear();
        
        var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        month = monthNames[month];
        
        natural = month + ' ' + day + ', ' + year;
        if(isTimeStamp){
            unix = timestamp;
        }else{
            unix = date.getTime() / 1000;
        }
    }
		
	res.json({ 'unix': unix, 'natural': natural });
};