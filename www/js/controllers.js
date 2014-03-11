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
        },
        function(user, error) {
          console.log('Error: ' + error);
          $rootScope.error = error;
        }
      );
    };
}]);
