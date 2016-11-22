var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	Name: {type:String, required:true, minlength:4},
	Email: {type:String, required:true, minlength:8},
	Password: {type:String, required:true, minlength:4}
}, {timestamps:true});

mongoose.model('User', UserSchema);