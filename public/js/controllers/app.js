angular.module('pager')

.controller('HeaderCtrl', function($scope, $state) {

  $scope.image = 'http://agencedianeriel.com/photo/Ostiguy-Jeanne-nouv09.jpg';

  $scope.$on('$viewContentLoaded', function() {
    $scope.view = $state.current.title;
 
  });
});
