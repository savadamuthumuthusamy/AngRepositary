var  app = angular.module("Myapp", []);

app.controller('Allhttpmethod' ,function($scope,$http)
{



$scope.puthttp= function(value)
{
console.log("in the http fuction");
 $http.put('https://reqres.in/api/users',{"name":"muthu", "job":"Sr dev cons"} ).then( function(respose){
console.log(respose);

$scope.data= respose;

if($scope.data.length >0 )
{

}

});
}


$scope.putget= function(value)
{ 
 $http.get('https://reqres.in/api/users').then( function(respose){
console.log(respose);


$scope.data= respose;

});
}

});



