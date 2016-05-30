
'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
require('dotenv').config();

var app = express();
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
routes(app);
   
app.listen(process.env.PORT, function () {
   console.log('Node.js listening on port '+ process.env.PORT + '...');
});
