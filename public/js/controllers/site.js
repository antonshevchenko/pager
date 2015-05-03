angular.module('pager')

.controller('SiteHeaderCtrl', function($scope) {

	$scope.site = "The TRAP";

})

.controller('SiteAboutCtrl', function($scope, $state, $stateParams, $facebook) {

	// Retrieve page ID
  	var pageID = $stateParams.id;
	  
	function getPageData() {
      $facebook.api(pageID).then(function(response) { 
		console.log(response);
        var pageData = {
			about: response.about,
			description: response.description,
			phone: response.phone,
			operatingHours: response.hours,
			address: response.location
        };
		$scope.aboutInformation = pageData;
			console.log(pageData.address);
      });
	  
	}
	getPageData();
})

.controller('SiteBlogCtrl', function($scope) {

	$scope.site = "The TRAP";

});