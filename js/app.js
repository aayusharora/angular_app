var app=angular.module('app',['ngRoute','controllerapp','detailapp']);

app.config(['$routeProvider',function($routeProvider){
$routeProvider.
when('/list',{
	templateUrl:'partials/list.html',
	controller:'artistController'

}).
when('/details/:itemId',{
    templateUrl:'partials/details.html',
    controller:'detailController'

}).

otherwise({
redirectTo:'/list'

});


	
	


}]);