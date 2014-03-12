angular.module('starter.controllers', [])

.controller('SignUpFormCtrl',
  ['$scope', '$state', 'Auth', function($scope, $state, Auth) {
    $scope.signUp = function(){
      Auth.signUp(
        {
          username: $scope.username,
          email: $scope.email,
          password: $scope.password
        },
        function(user) {
          $state.go('user');
        },
        function(user, error) {
          console.log('Error!');
          console.log(error);
        }
      );
    };
}])

.controller('SignInFormCtrl',
  ['$scope', '$state', 'Auth', function($scope, $state, Auth) {
    $scope.signIn = function(){
      Auth.signIn(
        {
          username: $scope.username,
          password: $scope.password
        },
        function(user) {
          $state.go('user');
        },
        function(user, error) {
          console.log('Error');
          console.log(error);
        }
      );
    };
}]);
