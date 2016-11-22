var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	
	answer: {type:String, required:true, minlength:8},
	supporting: {type:String, minlength:8},
	likes: [{type:Schema.Types.ObjectId, ref: 'User'}],
	_user: {type: Schema.Types.ObjectId, ref: 'User', required:true},
	_question: {type: Schema.Types.ObjectId, ref: 'Question', required:true}
}, {timestamps:true});

mongoose.model('Answer', AnswerSchema);