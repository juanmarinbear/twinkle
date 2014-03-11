angular.module('starter.controllers', [])

.controller('SignUpFormCtrl',
  ['$rootScope', '$scope', '$location', 'Auth', function($rootScope, $scope, $location, Auth) {
    $scope.signUp = function(){
      Auth.signUp(
        {
          username: $scope.username,
          email: $scope.email,
          password: $scope.password
        },
        function(user) {
          console.log('Sign Up Success!');
          console.log(user);
          $location.path('/');
        },
        function(user, error) {
          console.log('Error!');
          console.log(error);
          $rootScope.error = error;
        }
      );
    };
}])

.controller('SignInFormCtrl',
  ['$rootScope', '$scope', '$location', 'Auth', function($rootScope, $scope, $location, Auth) {
    $scope.signIn = function(){
      Auth.signIn(
        {
          username: $scope.username,
          password: $scope.password
        },
        function(user) {
          console.log('Sign In Success!');
          console.log(user);
          $location.path('/');
        },
        function(user, error) {
          console.log('Error');
          console.log(error);
          $rootScope.error = error;
        }
      );
    };
}]);
