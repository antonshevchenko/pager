angular.module('pager')

.controller('PagesCtrl', function($q, $scope, $state, $facebook, User) {
  // Default values
	$scope.pages = [];

  function getPageData(pages) {
    pages.map(function(page) {
      $facebook.api(page.id).then(function(response) {
        var data = {
          id: response.id,
          name: response.name,
          likes: response.likes,
          checkins: response.checkins,
          image: null
        };

        // Get picture
        $facebook.api(page.id + '/photos').then(function(res) {
          if (!angular.isUndefined(res.data) && res.data.length) {
            data.image = res.data[0].picture;
          }
          $scope.pages.push(data);
        });
      });
    });
  }

  function getPages() {
    // Get pages
    $facebook
      .api("me/accounts?" + User.getAccessToken())
      .then(function(response) {
        var pages = [];
        response.data.map(function(page) {
          pages.push({
            id: page.id,
            name: page.name
          });
        });

        // Get page data
        getPageData(pages);
      });
  }

  $scope.editPage = function(page) {
    $state.go('app.edit', { id: page.id });
  };

  // Get initial list of pages
  getPages();
});
