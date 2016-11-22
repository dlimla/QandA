var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	
	title: {type:String, required:true, minlength:8},
	description: {type:String, required:false, minlength:8},
	_user: {type: Schema.Types.ObjectId, ref: 'User', required:true},
	answers: [{type:Schema.Types.ObjectId, ref: 'Answers'}]
}, {timestamps:true});

mongoose.model('Question', QuestionSchema);