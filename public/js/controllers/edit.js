angular.module('pager')

.controller('EditCtrl', function($scope, $stateParams, $facebook) {
  // Retrieve page ID
  var pageID = $stateParams.id;

  function getPageData() {
    $facebook.api(pageID)
      .then(function(response) {
        $scope.page = response;
      });
  }

  // Get page data
	getPageData();
});
