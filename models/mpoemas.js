// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var poemasSchema = new Schema({
	title  : {type:String, required:true},
	content : {type:String, required:true},
	createAt: {type:Date,required:true},
	categories:{
		name: {type:String, required:true},
	}

});



var Poemas = mongoose.model('Poemas', poemasSchema);

// make this available to our users in our Node applications
module.exports = Poemas;