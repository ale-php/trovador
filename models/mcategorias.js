// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var categoriaSchema = new Schema({
	name  : {type:String, required:true},

});



var Categorias = mongoose.model('Categorias', categoriaSchema);

// make this available to our users in our Node applications
module.exports = Categorias;