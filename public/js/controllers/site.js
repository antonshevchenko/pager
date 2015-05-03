angular.module('pager')

.controller('SiteHeaderCtrl', function($scope, $state, $stateParams, $facebook, Api) {
	// Get options for site
	Api.getPage($stateParams.id)
		.then(function(page) {
			$scope.options = page.options;
		});

	$facebook.api($stateParams.id)
		.then(function(data) {
			$scope.page = data;
		});
})

.controller('SiteHomeCtrl', function($scope, $state, $stateParams, $facebook, Api) {
	// Get options for site
	Api.getPage($stateParams.id)
		.then(function(page) {
			$scope.options = page.options;
		});

	// Get general info
	$facebook.api($stateParams.id)
		.then(function(data) {
			$scope.page = data;
		});

	// Get events
	$facebook.api($stateParams.id + '/events')
		.then(function(data) {
			$scope.events = data;
		});

	// Get images
	$facebook.api('/1438051873176545/photos')
		.then(function(data) {
			$scope.photos = data.data;
		});

	// Get news
	$facebook.api($stateParams.id + '/feed')
		.then(function(data) {
			$scope.news = data.data;
		});
})

.controller('SiteAboutCtrl', function($scope, $state, $stateParams, $facebook) {

	// Retrieve page ID
  	var pageID = $stateParams.id;

	function getPageData() {
      $facebook.api(pageID).then(function(response) {
        var pageData = {
			about: response.about,
			description: response.description,
			phone: response.phone,
			operatingHours: response.hours,
			address: response.location
        };
		$scope.aboutInformation = pageData;
      });

	}
	getPageData();
})

.controller('SiteNewsCtrl', function($scope) {

	$scope.site = "The TRAP";

});
