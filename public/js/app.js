angular.module('pager', ['ui.router', 'ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: '/public/views/layout.html'
    })

    .state('app.main', {
      url: '/',
      views: {
        'header': {
          templateUrl: '/public/views/header.html',
          controller: 'HeaderCtrl'
        },
        'content': {
          templateUrl: '/public/views/landing.html',
          controller: 'LandingCtrl'
        },
        'footer': {
          templateUrl: '/public/views/footer.html'
        }
      }
    })

    .state('app.pages', {
      url: '/pages',
      title: 'Pages',
      views: {
        'header': {
          templateUrl: '/public/views/header.html',
          controller: 'HeaderCtrl'
        },
        'content': {
          templateUrl: '/public/views/pages.html',
          controller: 'PagesCtrl'
        },
        'footer': {
          templateUrl: '/public/views/footer.html'
        }
      }
    })

    .state('app.pages.edit', {
      url: '/:id',
      title: 'Edit Page',
      views: {
        'header': {
          templateUrl: '/public/views/header.html',
          controller: 'HeaderCtrl'
        },
        'content': {
          templateUrl: '/public/views/edit.html',
          controller: 'EditCtrl'
        },
        'footer': {
          templateUrl: '/public/views/footer.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
});
