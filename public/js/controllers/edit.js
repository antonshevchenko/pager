angular.module('pager')

.controller('EditCtrl', function($scope, $stateParams, $facebook) {
  // Retrieve page ID
  var pageID = $stateParams.id;
  
  console.log("pageID: " + pageID);
    function getPageData() {
	    $facebook.api(pageID).then(       // Replace for a legit ID 
	      function(response) {        
          console.log(response);
        },
	      function(err) {});
	  }
  
	getPageData();
    
   $scope.onCheckedAbout= function(page) {
    $scope.page.showAbout = page.showAbout;
   };
   
   $scope.onCheckedNews= function(page) {
    $scope.page.showBlog = page.showBlog;
   };
   
   $scope.onCheckedEvents = function(page) {
    $scope.page.showEvents = page.showEvents;
   };
   
   $scope.onCheckedImages = function(page) {
    $scope.page.showImages = page.showGallery;
   };
   
   
});
