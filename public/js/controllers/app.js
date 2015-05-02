angular.module('pager')

.controller('PageController', function($scope) {
  $scope.page = [
    {"about": "About"}
  ];
})

.controller('HeaderController', function($scope) {
 	$scope.user = 'Anton';
 	$scope.image = 'https://dl.dropboxusercontent.com/content_link/AuIGRgg5QyV4UKwUd21NVBxd6a0i0Je1BXb5kJXhD4YYJqiOh6e3c9d1prgTueGD';
});
