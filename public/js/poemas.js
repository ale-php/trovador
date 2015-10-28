var app = angular.module('app', []);


app.controller("Controller", function($http,$scope){

$http.get("/poemas").success(function(poemas){

$scope.title = "O Trovador";
$scope.poemas = poemas;

console.log(poemas);

	});

})
