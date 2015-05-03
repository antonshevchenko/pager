angular.module('pager')

.controller('EditCtrl', function($scope, $stateParams, $facebook) {
  // Retrieve page ID
  var pageID = $stateParams.id;
  
  console.log("pageID: " + pageID);
    function getPageData() {
	    $facebook.api(pageID).then(       // Replace for a legit ID 
	      function(response) {        
          $scope.page = { "About": true, "Blog" : true, "Gallery" : true, "Events" : true };
        },
	      function(err) {});
	  }
  
	getPageData();

//  $scope.page = {"field1":123, "field2":456, "field3":789, "field4":10};
});
