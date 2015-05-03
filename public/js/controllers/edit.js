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
});
