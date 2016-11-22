var path = require('path');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {

	addLike: function(req, res){
		Answer.findOne({"_id": req.params.id}).exec(function(err, answers){
			if(err){
				res.json(err)
			}
			else{
				answers.likes.push(req.session.user._id)
				answers.save(function(err,result){
					if(err){
						res.json(err)
					}
					else{
						// console.log(result)
						res.json(result)
					}
				})


				
			}
		})
	},


	postNewAnswer: function(req, res){
		var brandNewAnswer = new Answer(req.body);
		brandNewAnswer._user = req.session.user._id;
		brandNewAnswer._question = req.params.id;
		brandNewAnswer.save(function(err, result){
			if(err){
				res.json(err);
			}
			else{
				Question.findOne({"_id": req.params.id}).exec(function(err, question){
					if(err){
						res.json(err);
					}
					else{
						console.log(question)
						question.answers.push(brandNewAnswer.id)
						question.save(function(err,results){
							if(err){
								res.json(err)
							}
							else{
								res.json(results);
							}
						})
					}
				})
			}
		})
	}


}