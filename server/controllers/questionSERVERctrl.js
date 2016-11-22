var path = require('path');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports = {

	allQuestions: function(req, res){
		Question.find({}).exec(function(err, questions){
			if(err){
				res.json(err);
			}
			else{
				res.json(questions)
			}
		})
	},


	brandNewQuestion: function(req, res){
		// console.log("a the server controller", req.body);
		var question = new Question(req.body)
		question._user = req.session.user._id;
		question.save(function(err, result){
			if(err){
				res.json(err);
			}
			else{
				res.json(result);
			}
		})
	},

	getQuestion: function(req, res){
		Question.findOne({"_id": req.params.id}).populate('_user').populate({path:'answers', model:'Answer', populate:{path:'_user', model: 'User'}}).exec(function(err, result){
			if(err){
				res.sendStatus(err)
			}
			else{
				res.json(result);
			}
		})
	}


}
