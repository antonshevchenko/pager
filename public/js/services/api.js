angular.module('pager')

.factory('Api', function($q, $http, User) {
  return {
    getPages: function() {
      var deferred = $q.defer();

      $http.get('http://pagerapp2.localtunnel.me/api/v1/user/' + User.getUserID() + '/pages')
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    },

    getPage: function(pageID) {
      var deferred = $q.defer();

      $http.get('http://pagerapp2.localtunnel.me/api/v1/page/' + pageID)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    },

    savePage: function(page) {
      var deferred = $q.defer();

      $http.post('http://pagerapp2.localtunnel.me/api/v1/page/', page)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    },
  };
});
