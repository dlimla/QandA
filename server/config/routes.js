var path = require('path');
var mongoose = require( 'mongoose' )
var mainCtrl = require('../controllers/loginRegSERVERctrl.js');
var questionCtrl = require('../controllers/questionSERVERctrl.js');
var answerCtrl = require('../controllers/answerSERVERctrl.js');

module.exports = function(app){
	app.post('/login', mainCtrl.login)
	app.post('/newUser', mainCtrl.register)
	app.use(userAuth);
	app.get('/currentUser', mainCtrl.getCurrent)
	app.post('/newQuestion', questionCtrl.brandNewQuestion)
	app.post('/postNewAnswer/:id', answerCtrl.postNewAnswer)

	app.post('/addLike/:id', answerCtrl.addLike)

	app.get('/getSpecificQuestion/:id', questionCtrl.getQuestion)
	app.get('/getAllQuestions', questionCtrl.allQuestions)
	app.delete('/deleteSession', mainCtrl.deleteCurrentSession)

}

function userAuth(req, res, next){
	if (req.session.user){
		next();
	}
	else{
		res.sendStatus(401)
	}
}