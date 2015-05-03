angular.module('pager')

.controller('SiteHeaderCtrl', function($scope) {

	$scope.site = "The TRAP";

})

.controller('SiteAboutCtrl', function($scope) {

	$scope.yolo = "cholo";

	$scope.aboutInformation = {
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit, dolorem corporis, doloribus veritatis illo molestiae ut cupiditate ipsum! Harum nam dolorem non velit delectus fuga labore iste, libero, quo?",
		address: "1234 Swag St.br",
		phone: "5141231233",
		email: "asdasdasdads",
		hours: "9-5",
	};

})

.controller('SiteBlogCtrl', function($scope) {

	$scope.site = "The TRAP";

});