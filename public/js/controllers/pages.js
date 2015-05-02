angular.module('pager')

.controller('PagesCtrl', function($scope, $state) {
  $scope.pages = [
    { }
  ];

  $scope.editPage = function(page) {
    $state.go('app.pages.edit', { id: page.id });
  };
});
