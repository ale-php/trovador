var app = angular.module('app', ['ngRoute']);



app.controller("Controller", function($http,$scope){

$http.get("/poemas").then(function(response){

$scope.poemas = response.data;

	},
  
	function(error) {
      console.log("The request failed: " + error);
  });

});

app.controller("poemas", function($http,$scope,$routeParams){

console.log($routeParams);

$http.get('/poemas/ver/:name').then(function(response){


$scope.poemas = response.data;


	},
	function(error) {
      console.log("The request failed: " + error);
  });



})
