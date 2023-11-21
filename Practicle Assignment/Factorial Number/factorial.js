angular.module('myApp', [])
  .controller('factorialCtrl', function($scope) {
    $scope.factorial = 1;

    $scope.calculateFactorial = function() {
      var number = $scope.number;
      if (number < 0) {
        alert('Please enter a positive number.');
        return;
      }

      $scope.factorial = 1;
      for (var i = 1; i <= number; i++) {
        $scope.factorial *= i;
      }
    };
  });