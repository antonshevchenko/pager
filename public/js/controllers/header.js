angular.module('pager')

.controller('HeaderCtrl', function($rootScope, $scope, $state, $facebook, User) {
  function updateUser() {
    $scope.name = User.getName();
    $scope.image = User.getPicture();
  }

  $scope.openMenu = function(open) {
    $scope.isMenuOpen = open;
  };

  $scope.logout = function() {
    $facebook.logout().then(function(response) {
      User.logout();
      $state.go('home');
    });
  };

  // Update user name in header
  $rootScope.$on('facebook:login', function() {
    updateUser();
  });

  // Update navigation in header
  $scope.$on('$viewContentLoaded', function() {
    $scope.view = $state.current.title;
  });

  // By default, update user
  updateUser();
});
