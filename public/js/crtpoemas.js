var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl:"/view/index.jade",
      controller: "Controller"
    })
    .when("/ver/:name",{

      templateUrl:"/view/poemas.jade",
      controller: "poemas"
    })
    .otherwise({redirectTo: '/'});
});


app.controller("Controller", function($http,$scope){

$http.get("/poemas").then(function(response){

$scope.poemas = response.data;

	},
	function(error) {
      console.log("The request failed: " + error);
  });

});

app.controller("poemas", function($http,$scope,$routeParams){

console.log($routeParams.name);

$http.get('/poemas/ver/:name').then(function(response){


$scope.poemas = response.data;


	},
	function(error) {
      console.log("The request failed: " + error);
  });



})
