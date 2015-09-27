

var controllerapp=angular.module('controllerapp',[]);
controllerapp.controller('artistController',['$scope','$http',function($scope,$http){
  $http.get('js/data.json').success(function(data){
     $scope.artists = data;
     $scope.sort="name";
  });
	

}]);
var detailapp=angular.module('detailapp',[]);
detailapp.controller('detailController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  $http.get('js/data.json').success(function(data){
     $scope.artists = data;
     $scope.whichItem=$routeParams.itemId;

      
     if($routeParams.itemId > 0){
      $scope.prevItem=Number($routeParams.itemId)-1;
   
     }
     else{
      $scope.prevItem=$scope.artists.length-1;
     }
      if($routeParams.itemId < $scope.artists.length-1){
      $scope.nextItem=Number($routeParams.itemId)+1;
     }
     else{
      $scope.nextItem=0;
     }



  });
	
	
}]);
