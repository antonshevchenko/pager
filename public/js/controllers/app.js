angular.module('pager')

.controller('HeaderCtrl', function($scope, $state) {
  $scope.user = 'Ostiguy';
  $scope.image = 'http://agencedianeriel.com/photo/Ostiguy-Jeanne-nouv09.jpg';

  $scope.$on('$viewContentLoaded', function() {
    $scope.view = $state.current.title;
  });
})

.controller('FacebookContoller', function($scope, $state, $facebook) {

	$scope.isLoggedIn = false;
	  $scope.login = function() {
	    $facebook.login().then(function() {
	      refresh();
	    });
	  }
	  function refresh() {
	    $facebook.api("me/accounts?CAACEdEose0cBAMoeXpoQ2wrR7ZChbI0tRME1MqFA2o6ngxCB6Hp2MKe2y5JnSxOwwzJ6TdKgWZBHzcAL6OvbdJyOpZALGSn9cbtlDMsBS3tGMhh4uFYwKYZAoEwzBxDHfQh9quZB5YWLcR5est2ZBCTB4QBaLHlVnZANIv7uBcDzI77ovNLG2iqtN5GsUeZBtROZCX71LoROeZAtlq2pjQThDe").then( 
	      function(response) {
	      	console.log(response);

	      	pages = response.data;

	      	var pageIDs = [];

			console.log(response.data.length);
	      	
	      	for (var i = response.data.length - 1; i >= 0; i--) {
	      		console.log(response.data[i]);

	      		 pageIDs.push({
            		id: response.data[i].id,
	      			name: response.data[i].name
	      		 });	
	      	};

	      	$scope.pagesView = function(page) {
			    $state.go('app.pages', pageIDs);
		  	};
		  	

	        $scope.welcomeMsg = pages[0].id;
	        $scope.isLoggedIn = true;
	      },
	      function(err) {
	        $scope.welcomeMsg = "Please log in";
	      });
	  }
	  
	  refresh();

});
