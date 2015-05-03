angular.module('pager')

.controller('EditCtrl', function($scope, $stateParams, $facebook) {
  // Retrieve page ID
  var pageID = $stateParams.id;

  $scope.options = {
    about: false,
    blog: false,
    events: false,
    gallery: false
  };
  
  $scope.updateCategories = function(page) {
    $scope.options = { about: page.about,
    blog: page.blog,
    events : page.events,
    gallery : page.gallery };
	};
});
