angular.module('pager')

.controller('EditCtrl', function($scope, $stateParams) {

  var swag = $stateParams.id;
  console.log(swag);

  $scope.page = {"field1":123, "field2":456, "field3":789, "field4":10};
});
