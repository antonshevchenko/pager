angular.module('pager')

.controller('HomeCtrl', function($rootScope, $scope, $state, $facebook, User) {
  function doLogin(data) {
    // Store user token and id
    User.setUserID(data.authResponse.userID);
    User.setAccessToken(data.authResponse.accessToken);

    // Get user name
    $facebook.api('/me').then(function(response) {
      User.setName(response.name);

      // Broadcast login event
      $rootScope.$broadcast('facebook:login');
    });

    // Go to the pages view
    $state.go('app.pages');
  }

	$scope.login = function() {
		$facebook.login().then(function(response) {
      doLogin(response);
		});
	};

  // Check if logged in
	$facebook.getLoginStatus().then(function(response) {
    if (response.status === 'connected') {
      doLogin(response);
    }
  });
});
