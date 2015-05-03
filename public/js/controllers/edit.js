angular.module('pager')

.controller('EditCtrl', function($scope, $state, $stateParams, $facebook) {
  // Retrieve page ID
  var pageID = $stateParams.id;

  $scope.options = {
    about: false,
    blog: false,
    events: false,
    gallery: false
  };

  $scope.changeOption = function(option) {
    $scope.options[option] = !$scope.options[option];
  };

  $scope.viewPage = function() {
    $state.go('app.site', { id: pageID });
  };

  // $scope.updateCategories = function(page) {
  //   $scope.options = { about: page.about,
  //   blog: page.blog,
  //   events : page.events,
  //   gallery : page.gallery };
	// };
});
