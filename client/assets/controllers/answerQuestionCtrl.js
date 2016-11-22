app.controller('answerQuestionCtrl', function($scope, $location, mainFactory, $routeParams){

	var getSpecificQuestion = function(){
		mainFactory.getQuestion($routeParams, function(data){
			console.log(data)
			$scope.getQuestion = data;
		})
	}

	getSpecificQuestion();


	$scope.likeAnAnswer = function(answerID){
		mainFactory.addLike(answerID, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.likeError = data.errors
			}
			else{
				getSpecificQuestion();
				

			}
		});
	}

	


	$scope.newAnswer = function(newAnswer){
		// console.log($routeParams)
		mainFactory.addAnswer(newAnswer, $routeParams, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.answerErrors = data.errors
			}else{
				$location.url('/main')
			}
		})
	}

})