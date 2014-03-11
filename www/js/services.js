angular.module('starter.services', [])

.factory('Parse', function() {

  Parse.initialize("bI2DrpfOupDiOP6vsMG5JuqPc6Uf8VtREKkA7tFk", "MuWjOV8pYJuQZCmexYhq7nc60R1aqKBUwN2iOM5j");
  return Parse;
})

.factory('Auth', ['$http', 'Parse', function($http, Parse) {

  return {

    signUp: function(user, success, error) {
      var parseUser = new Parse.User(user);
      parseUser.signUp(null, { success: success, error: error });
    },

    signIn: function(user, success, error) {
      Parse.User.logIn(user.username, user.password, { success: success, error: error });
    },

    signOut: function() {
      Parse.User.logOut();
    }
  }
}]);
