angular.module('pager')

.controller('PagesCtrl', function($scope) {
  $scope.pages = [
    { title: 'Hannah Montana', image: 'http://images.livemixtapes.com/artists/blaze/migo_lingo/cover.jpg', likes: 480, checkins: 1245 }
  ];
});
