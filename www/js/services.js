angular.module('starter.services', [])

.factory('Parse', function() {
  Parse.initialize("bI2DrpfOupDiOP6vsMG5JuqPc6Uf8VtREKkA7tFk", "MuWjOV8pYJuQZCmexYhq7nc60R1aqKBUwN2iOM5j");
  return Parse;
})

.factory('Storage', function() {
  var storage = window.localStorage;
  return storage;
})

.factory('Auth', ['$http', 'Parse', 'Storage', function($http, Parse, Storage) {
  // var currentUser = $cookieStore.get('user') || { username: '' };

  // $cookieStore.remove('user');

  return {
    isLoggedIn: function(user) {
    },
    register: function(user, success, error) {
      var parseUser = new Parse.User(user);
      parseUser.signUp(null, {
        success: success,
        error: error
      });
    }
  }
}]);
