
app.controller("categoria",function($http,$scope){

$http.get("/categorias").then(function(response){

$scope.categorias = response.data;

	},
	function(error) {
      console.log("The request failed: " + error);
  });

})