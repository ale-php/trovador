#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');	// usa o modulo mongoose

//Connection URL: mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/

// verifica se esta on se não usa host local
var host = process.env.OPENSHIFT_MONGODB_DB_HOST || "localhost"
// verifica se esta on se não usa porta local
var dbporta = process.env.OPENSHIFT_MONGODB_DB_PORT || 27017
// conecta no banco de dados
mongoose.connect('mongodb://'+host+':'+dbporta+'/blog');

var poemas = require('./routes/poemas');
var categorias = require('./routes/categorias');



var app = express();




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/poemas', poemas);
app.use('/categorias', categorias);


app.get("/",function(req,res){

	res.render("poemas");
})

 var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1" ;
 var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

 app.listen(port, ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ),ipaddress,port);
});