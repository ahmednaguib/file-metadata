
'use strict';

var express = require('express');
var mongo = require('mongodb');
var routes = require('./app/routes/index.js');
require('dotenv').config();

var app = express();

mongo.connect(process.env.MONGO_URI, function (err, db) {

   if (err) {
      throw new Error('Database failed to connect!');
   } else {
      console.log('Successfully connected to MongoDB.');
   }

   app.use('/public', express.static(process.cwd() + '/public'));
   app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

   routes(app, db);

   app.listen(process.env.PORT, function () {
      console.log('Node.js listening on port '+ process.env.PORT + '...');
   });

});