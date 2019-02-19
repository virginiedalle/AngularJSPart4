$ function(){
angular.module('myApp', [])
.controller('CounterController', function($scope) {
    var incremented = false;
    var decremented = false;
    $scope.count = 15;

    $scope.increment = function() {
    if (incremented) { return; }
    $scope.count++;
    incremented = true;
    };
    $scope.decrement = function() {
    if (decremented) { return; }
    $scope.count--;
    decremented = true;
    };
});
});
