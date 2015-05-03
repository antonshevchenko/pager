angular.module('pager')

.controller('PagesCtrl', function($q, $scope, $state, $facebook, User, Api) {
  // Default values
	$scope.pages = [];
	$scope.sites = [];

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
          } else {
						// Default image
						data.image = 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c81.0.275.275/399548_10149999285987789_1102888142_n.png?oh=b8250e3e0e2b70f1ecb3d5f249c82fce&oe=55D990A0&__gda__=1439858344_62a4dad51be5b02c42853bcbb3102473';
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

		// Get pages on our backend
		Api.getPages()
			.then(function(data) {
				$scope.sites = data;
			});
  }

	$scope.isCreated = function(page) {
		for (var i = 0; i < $scope.sites.length; i++) {
			if (page.id == $scope.sites[i].pageID) {
				return true;
			}
		}
		return false;
	};

  $scope.editPage = function(page) {
    $state.go('app.edit', { id: page.id });
  };

  // Get initial list of pages
  getPages();
});
