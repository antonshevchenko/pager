angular.module('pager')

.factory('User', function(localStorageService) {
  return {
    getAccessToken: function() {
      return localStorageService.get('user.accessToken') || null;
    },

    setAccessToken: function(accessToken) {
      localStorageService.set('user.accessToken', accessToken);
    },

    getUserID: function() {
      return localStorageService.get('user.userID') || null;
    },

    setUserID: function(userID) {
      localStorageService.set('user.userID', userID);
    },

    getName: function() {
      return localStorageService.get('user.name') || null;
    },

    setName: function(name) {
      localStorageService.set('user.name', name);
    },
  };
});
