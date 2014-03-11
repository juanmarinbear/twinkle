angular.module('starter.controllers', [])

.controller('SignUpFormCtrl',
  ['$rootScope', '$scope', '$location', 'Auth', function($rootScope, $scope, $location, Auth) {
    $scope.signUp = function(){
      Auth.register({
        username: $scope.username,
        email: $scope.email,
        password: $scope.password,
        function() {
        },
        function(err) {
          $rootScope.error = err;
        }
      });
    };
}]);
