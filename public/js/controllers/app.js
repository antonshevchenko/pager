angular.module('pager')

.controller('HeaderCtrl', function($scope, $state) {
  $scope.user = 'Ostiguy';
  $scope.image = 'http://agencedianeriel.com/photo/Ostiguy-Jeanne-nouv09.jpg';

  $scope.$on('$viewContentLoaded', function() {
    $scope.view = $state.current.title;
  });
})

.controller('FacebookContoller', function($scope, $facebook) {

	$scope.isLoggedIn = false;
	  $scope.login = function() {
	    $facebook.login().then(function() {
	      refresh();
	    });
	  }
	  function refresh() {
	    $facebook.api("/me").then( 
	      function(response) {
	        $scope.welcomeMsg = "Welcome " + response.name;
	        $scope.isLoggedIn = true;
	      },
	      function(err) {
	        $scope.welcomeMsg = "Please log in";
	      });
	  }
	  
	  refresh();

});
