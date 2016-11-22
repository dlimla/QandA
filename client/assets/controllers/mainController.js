app.controller('mainController', function($scope, $location, mainFactory, $routeParams){
//------------------------------------------------
	//get a questions to be answered

	var getAllQuestions = function(){
		mainFactory.getAllQuestions(function(data){
			$scope.allQuestions = data;
		})
	}

	getAllQuestions();


	
//------------------------------------------------

	$scope.loginUser = function(user){
		mainFactory.loginUser(user, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.loginErrors = data.errors
			}else{
				$location.url('/main')
			}
		})
	}


	$scope.addNewUser = function(newUser){
		mainFactory.addNewUser(newUser, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.regErrors = data.errors
			}else{
				$location.url('/main')
			}
		});
	}


//-------------------------------------------------------
	
	$scope.newQuestion = function(question){
		// console.log(question);
		mainFactory.newQuestion(question, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.questionErrors = data.errors
			}else{
				getAllQuestions();
				$location.url('/main');
			}
		})
	}




//-------------------------------------------------------

	$scope.sessionOff = function(){
		mainFactory.killSession()
		
	}


})

//--------------------------------------------

app.controller('mainDashController', function($scope, $location, mainFactory){
	mainFactory.getCurrentUser(function(user){
		$scope.currentUser = user
	})
	
	$scope.logout = function(){

	}
})