angular.module('pager')

.controller('LandingCtrl', function($scope, $state) {
  $scope.pages = [
    { id: 123, title: 'Hannah Montana', image: 'http://images.livemixtapes.com/artists/blaze/migo_lingo/cover.jpg', likes: 480, checkins: 1245 }
  ];

  $scope.editPage = function(page) {
    $state.go('app.pages.edit', { id: page.id });
  };
});