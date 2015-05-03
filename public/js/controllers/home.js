angular.module('pager')

.controller('HomeCtrl', function($scope, $state, $facebook, User) {
	$scope.login = function() {
		$facebook.login().then(function(user) {
      // Store user token
      User.setUserID(user.authResponse.userID);
      User.setAccessToken(user.authResponse.accessToken);

      // Go to the pages view
      $state.go('app.pages');
		});
	};

  // Check if logged in
	// getPages();
});
