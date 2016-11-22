var path = require('path');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {


// ------------------------------------------------------
	register: function(req, res){
		if (req.body.Password != req.body.Confirm_Password){
			res.sendStatus(401);
		}
		else{
			var user = new User(req.body);
			user.save( function(err,user){
				if(err){
					console.log("there were validation errors", err)
					res.json(err);
				}else{
					req.session.user = {
						name: user.name,
						_id: user._id
					}
					res.sendStatus(200);
				}
			})
		}
	},
	login: function(req, res){
		var errors = {errors:{
					general: {
						message:'Invalid login information'
					}
				}};
		User.findOne({Email:req.body.Email}).exec(function(err,user){
			if(!req.body.Email || !req.body.Password || !user) {
				res.json(errors);
			}
			else {

				if(user.Password != req.body.Password) {
					res.json(errors);
				}
				else {
					req.session.user = {
						name: user.name,
						_id: user._id
					}
					res.send(user);
				}
			}
		})
	},
	getCurrent: function(req, res){
		User.findOne({_id: req.session.user._id}).exec(function(err, user)
		{
			if(err) {
				res.sendStatus(400);
			}
			else {
				var u = {
					Name: user.Name,
					_id: user._id
				}
				res.json(u);

			}
		})
	},

	deleteCurrentSession: function(req, res){
		req.session.user = "";
		res.sendStatus(401);
	}




}