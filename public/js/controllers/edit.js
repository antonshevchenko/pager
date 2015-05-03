angular.module('pager')

.controller('EditCtrl', function($scope, $state, $stateParams, $timeout, $facebook, User, Api) {
  // Retrieve page ID
  var pageID = $stateParams.id;

  $scope.state = 'Save';
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

  $scope.saveOptions = function() {
    var params = {
      pageID: pageID,
      userID: User.getUserID(),
      options: $scope.options
    };
    Api.savePage(params)
      .then(function() {
        $scope.state = 'Saved';

        $timeout(function() {
          $scope.state = 'Save';
        }, 1000);
      });
  };

  // Try to get page options
  Api.getPage(pageID)
    .then(function(data) {
      if (data) {
        $scope.options = data.options;
      }
    });
});
