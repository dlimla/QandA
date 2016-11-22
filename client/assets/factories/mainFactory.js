app.factory('mainFactory', ['$http', '$location', function($http, $location){

	var factory = {};

// ------------------ all question -----------------------

	factory.getAllQuestions = function(callback){
		$http({
			method:'get',
			url: '/getAllQuestions'
		}).then(function(returned_data){
			callback(returned_data.data)
		})
	}

	factory.addLike = function(answerID, callback){
		$http({
			method:'post',
			url: '/addLike/'+ answerID,
		}).then(function(returned_data){
			callback(returned_data.data)
		})
	}



// ------------------ question ---------------------------
	factory.newQuestion = function(question, callback){
		$http({
			method:'post',
			url: '/newQuestion',
			data: question
		}).then(function(returned_data){
			console.log('factory received response:', returned_data.data)
			callback(returned_data.data);
		})
		// console.log(question)
	}



	factory.getQuestion = function($routeParams, callback){
		$http({
			method:'get',
			url: '/getSpecificQuestion/' +$routeParams.id
		}).then(function(returned_data){
			console.log(returned_data);
			callback(returned_data.data);
		})
	}

	factory.addAnswer = function(postAnswer, $routeParams, callback){
		$http({
			method: 'post',
			url: '/postNewAnswer/'+$routeParams.id,
			data: postAnswer
		}).then(function(returned_data){
			callback(returned_data.data)
		})
	}



// ---------------- USERS --------------------------

	factory.addNewUser = function(newUser, callback){
		$http({
			  method: 'POST',
			  url: '/newUser',
			  data: newUser
		})
		.then(function(returned_data) {
	    	console.log('factory received response:' , returned_data.data)
	    	callback(returned_data.data);
		})
	}


	factory.loginUser = function(user, callback){
		$http({
			method: 'POST',
			url: '/login',
			data: user
		}).then(function(returned_data) {
			console.log('factory received response:' , returned_data.data)
	    	callback(returned_data.data);

		})
	},

	factory.getCurrentUser = function(callback){
		$http({
			method: "GET",
			url: "/currentUser",
		}).then(function(returned_data){
			callback(returned_data.data)
		})
	},

//----------------------------------------------------------------

	factory.killSession = function(){
		$http({
			method: "delete",
			url: "/deleteSession",
		})
	}

	return factory;
}])