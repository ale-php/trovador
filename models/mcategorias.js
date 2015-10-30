// grab the things we need
var mongoose = require('mongoose');
var Promise = require('bluebird');
//Preparando o mongoose, que é baseado em callbacks, para ser usado com o bluebird, que é uma api de Promises
Promise.promisifyAll(mongoose);
var Schema = mongoose.Schema;


var categoriaSchema = new Schema({
	name  : {type:String, required:true},

});



var Categorias = mongoose.model('Categorias', categoriaSchema);

// make this available to our users in our Node applications
module.exports = Categorias;