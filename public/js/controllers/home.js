angular.module('pager')

.controller('HomeCtrl', function($scope, $state, $facebook) {
  
  	var pages = [];
	$scope.isLoggedIn = false;


	$scope.pagesView = function() {	
		console.log(pages);
	    $state.go('app.pages', {pageList: pages});
	};

	$scope.login = function() {		
		$facebook.login().then(function() {
			refresh();
			if ($scope.isLoggedIn) {
				$scope.pagesView();
			}
		});
	}

	function refresh() {
		$facebook.api("me/accounts?CAACEdEose0cBAMoeXpoQ2wrR7ZChbI0tRME1MqFA2o6ngxCB6Hp2MKe2y5JnSxOwwzJ6TdKgWZBHzcAL6OvbdJyOpZALGSn9cbtlDMsBS3tGMhh4uFYwKYZAoEwzBxDHfQh9quZB5YWLcR5est2ZBCTB4QBaLHlVnZANIv7uBcDzI77ovNLG2iqtN5GsUeZBtROZCX71LoROeZAtlq2pjQThDe").then( 
	  
		function(response) {			
		  	
		  	for (var i = response.data.length - 1; i >= 0; i--) {
				pages.push({
					id: response.data[i].id,
					name: response.data[i].name
				});	
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