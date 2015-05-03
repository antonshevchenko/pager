angular.module('pager')

.factory('User', function(localStorageService) {
  function setAccessToken(accessToken) {
    localStorageService.set('user.accessToken', accessToken);
  }

  function setUserID(userID) {
    localStorageService.set('user.userID', userID);
  }

  function setName(name) {
    localStorageService.set('user.name', name);
  }

  function setPicture(picture) {
    localStorageService.set('user.picture', picture);
  }

  return {
    getAccessToken: function() {
      return localStorageService.get('user.accessToken') || null;
    },

    setAccessToken: function(accessToken) {
      setAccessToken(accessToken);
    },

    getUserID: function() {
      return localStorageService.get('user.userID') || null;
    },

    setUserID: function(userID) {
      setUserID(userID);
    },

    getName: function() {
      return localStorageService.get('user.name') || null;
    },

    setName: function(name) {
      setName(name);
    },

    getPicture: function() {
      return localStorageService.get('user.picture') || null;
    },

    setPicture: function(picture) {
      setPicture(picture);
    },

    logout: function() {
      setAccessToken(null);
      setUserID(null);
      setName(null);
      setPicture(null);
    },
  };
});
