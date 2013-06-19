var myApp = angular.module('myApp', []);

function Putly($scope, $location, $http) {
  $scope.location = $location;

  $scope.longURLs = [""];
  $scope.shortURL = "";
  $scope.text = 'hello';
  $scope.submit = function() {
  	var urls = [];
    $('.long-url').each(function () {
    	urls.push(encodeURIComponent($(this).text()));
    });
    var shortURL = Math.round(Math.random()*1000);
    $http.get('/setlink/'+shortURL+'/'+urls[0]).success(function(data){
    	$scope.shortURL = shortURL;
    })
  };
}

var URL = function () {
	return {
		shortName: "",
		url: "",
		hits: 0,
		creationTime: "",
		lastHitTime: ""
	}
}