angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider ) {

  $stateProvider

    // Sign Up / Sign In Pattern

    .state('launch', {
      url: "/launch",
      templateUrl: "templates/launch.html"
    })

    .state('signUp', {
      url: '/signUp',
      templateUrl: 'templates/signUp.html'
    })

    .state('signIn', {
      url: '/signIn',
      templateUrl: 'templates/signIn.html'
    })

    .state('passwordRecovery', {
      url: '/passwordRecovery',
      tempalteUrl: 'templates/passwordRecovery.html'
    })

    // Authenticated User Pattern

    .state('user', {
      url: '/',
      templateUrl: 'templates/home.html'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/launch');

}]);

