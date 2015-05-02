angular.module('pager')

.controller('PagesCtrl', function($scope, $state) {
  $scope.pages = [
    { id: 123, title: 'Hannah Montana', image: 'http://images.livemixtapes.com/artists/blaze/migo_lingo/cover.jpg', likes: 480, checkins: 1245 },
    { id: 456, title: 'Hannah Banana', image: 'http://images.livemixtapes.com/artists/blaze/migo_lingo/cover.jpg', likes: 12480, checkins: 542231 },
  ];

  $scope.editPage = function(index) {

  };
});
