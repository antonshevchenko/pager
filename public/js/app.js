angular.module('pager', ['ui.router', 'ui.bootstrap', 'LocalStorageModule','ngFacebook'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, $facebookProvider, localStorageServiceProvider) {
  // Setup Facebook API
  $facebookProvider.setAppId('1429537494015773');
  $facebookProvider.setPermissions("manage_pages");

  // Setup local storage
  localStorageServiceProvider.setPrefix('pager');

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'public/views/layout.html'
    })

    .state('home', {
      url: '/',
      title: 'Home',
      templateUrl: 'public/views/index.html',
      controller: 'HomeCtrl'
    })

    .state('app.pages', {
      url: '/pages',
      title: 'Pages',
      views: {
        'header': {
          templateUrl: 'public/views/header.html',
          controller: 'HeaderCtrl'
        },
        'content': {
          templateUrl: 'public/views/pages.html',
          controller: 'PagesCtrl'
        },
      }
    })

    .state('app.edit', {
      url: '/pages/:id',
      title: 'Edit Page',
      params: { id: null },
      views: {
        'header': {
          templateUrl: 'public/views/header.html',
          controller: 'HeaderCtrl'
        },
        'content': {
          templateUrl: 'public/views/edit.html',
          controller: 'EditCtrl'
        },
      }
    })

    .state('app.site', {
      url: '/sites/:id/about',
      title: 'Site Page',
      params: { id: null },
      views: {
        'header': {
          templateUrl: 'public/views/siteHeader.html',
          controller: 'SiteHeaderCtrl'
        },
        'content': {
          templateUrl: 'public/views/siteAbout.html',
          controller: 'SiteAboutCtrl'
        },
      }
    })

    .state('app.siteblog', {
      url: '/sites/:id/blog',
      title: 'Blog',
      params: { id: null },
      views: {
        'header': {
          templateUrl: 'public/views/siteHeader.html',
          controller: 'SiteHeaderCtrl'
        },
        'content': {
          templateUrl: 'public/views/siteBlog.html',
          controller: 'SiteBlogCtrl'
        },
      }
    })

    .state('app.siteevents', {
      url: '/sites/:id/events',
      title: 'Events',
      params: { id: null },
      views: {
        'header': {
          templateUrl: 'public/views/siteHeader.html',
          controller: 'SiteHeaderCtrl'
        },
        'content': {
          templateUrl: 'public/views/siteEvents.html',
          controller: 'SiteEventsCtrl'
        },
      }
    })

    .state('app.sitegallery', {
      url: '/sites/:id/gallery',
      title: 'Gallery',
      params: { id: null },
      views: {
        'header': {
          templateUrl: 'public/views/siteHeader.html',
          controller: 'SiteHeaderCtrl'
        },
        'content': {
          templateUrl: 'public/views/siteGallery.html',
          controller: 'SiteGalleryCtrl'
        },
      }
    });

  $urlRouterProvider.otherwise('/');
})

.run(function($rootScope) {
  // Load the facebook SDK asynchronously
  (function(){
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script');
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }());
});
