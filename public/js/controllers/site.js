angular.module('pager')

.controller('SiteHeaderCtrl', function($scope, $state, $stateParams, $facebook, Api) {
	// Get options for site
	Api.getPage($stateParams.id)
		.then(function(page) {
			$scope.options = page.options;
		});

	$facebook.api($stateParams.id)
		.then(function(data) {
			console.log(data);
			$scope.page = data;
		});


	// $scope.site = "The TRAP";
	//
 // 	$scope.viewSite = function() {
  //   	$state.go('app.site', { id: $stateParams.id });
	// };
	//
 // 	$scope.viewBlog = function() {
  //   	$state.go('app.siteblog', { id: $stateParams.id });
	// };
	//
 // 	$scope.viewEvents = function() {
  //   	$state.go('app.siteevents', { id: $stateParams.id });
	// };
	//
 // 	$scope.viewGallery = function() {
  //   	$state.go('app.sitegallery', { id: $stateParams.id });
	// };
})

.controller('SiteHomeCtrl', function($scope, $state) {

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

.controller('SiteBlogCtrl', function($scope) {

	$scope.site = "The TRAP";

});
