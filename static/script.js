var myApp = angular.module('myApp', []);

function Putly($scope, $location) {
  $scope.location = $location;

  $scope.list = [];
  $scope.text = 'hello';
  $scope.submit = function() {
    if (this.text) {
      this.list.push(this.text);
      this.text = '';
    }
  };
}