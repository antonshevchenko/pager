angular.module('pager')

.controller('HeaderCtrl', function($rootScope, $scope, $state, User) {
  // Update user name in header
  $rootScope.$on('facebook:login', function() {
    $scope.name = User.getName().split(' ')[0];
    $scope.image = 'http://agencedianeriel.com/photo/Ostiguy-Jeanne-nouv09.jpg';
  });

  // Update navigation in header
  $scope.$on('$viewContentLoaded', function() {
    $scope.view = $state.current.title;
  });
});
