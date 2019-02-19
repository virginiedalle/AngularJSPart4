var App = angular.module('carsApp',[]);
App.controller('carsCtrl',function($scope,$http){
  $http.get('assets/js/todos.json')
  .then(function(res){
    $scope.cars = res.data;
  });
});
