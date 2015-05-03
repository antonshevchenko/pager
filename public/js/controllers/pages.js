angular.module('pager')

.controller('PagesCtrl', function($scope, $state, $stateParams, $facebook) {
	
	var pageList = $stateParams.pageList;
	$scope.pages = [];
    
	for (var i = pageList.length - 1; i >= 0; i--) {
		
		var pageID = pageList[i].id;
		var pageName = pageList[i].name;
		

		$facebook.api(pageID).then( 
			function(response) {

				$scope.pages.push({
					id: pageID,
					title: pageName,
					image: "http://images.livemixtapes.com/artists/blaze/migo_lingo/cover.jpg",
					likes: response.likes,
					checkins: response.checkins
				});

  				// console.log(response.likes);
  				// console.log(response.checkins);
			},
			function(err) {
				console.log('fb api is being a h**!');
			}
		);

	};

	
	console.log($scope.pages);
		



  // $scope.pages = [
  //   { id: 123, title: 'Hannah Montana', image: 'http://images.livemixtapes.com/artists/blaze/migo_lingo/cover.jpg', likes: 480, checkins: 1245 },
  //   { id: 456, title: 'Hannah Banana', image: 'http://images.livemixtapes.com/artists/blaze/migo_lingo/cover.jpg', likes: 12480, checkins: 542231 },
  // ];


  $scope.editPage = function(page) {
    $state.go('app.edit', { id: page.id });
  };
});
