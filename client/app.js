var app = angular.module('app', ['ngRoute']);


app.factory('loginInterceptor',['$q','$location',function($q, $location){
 return{
  'responseError': function(rejection){
   if (rejection.status == 401){
         $location.url('/');
   }
   return $q.reject(rejection);
  }
 }
}])


app.config(function($routeProvider, $httpProvider){
	$httpProvider.interceptors.push('loginInterceptor');
	$routeProvider
	.when('/', {
		templateUrl: 'partials/loginPartial.html'
	})
	.when('/main', {
		templateUrl: 'partials/mainPage.html',
		controller: 'mainDashController'
	})
	.when('/addQuestion', {
		templateUrl: 'partials/addQuestion.html'
	})
	.when('/answerQuestion/:id', {
		templateUrl: 'partials/answerQuestion.html',
		controller: 'answerQuestionCtrl'
	})
	.when('/question/:id', {
		templateUrl: 'partials/questionAndAnswers.html',
		controller: 'answerQuestionCtrl'
	})
	.otherwise({
		redirectTo: 'partials/loginPartial.html'	
	})
})