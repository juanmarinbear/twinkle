angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider ) {

  $stateProvider

    // Sign Up / Sign In Pattern

    .state('anon', {
      abstract: true,
      template: "<ui-view />"
    })

    .state('anon.launch', {
      url: "/launch",
      templateUrl: "templates/launch.html"
    })

    .state('anon.signUp', {
      url: '/signUp',
      templateUrl: 'templates/signUp.html'
    })

    .state('anon.signIn', {
      url: '/signIn',
      templateUrl: 'templates/signIn.html'
    })

    .state('anon.passwordRecovery', {
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

}])

.run(['$rootScope', '$state', 'Auth', function($rootScope, $state, Auth) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    if(!Auth.isSignedIn()){

    }
  })

}]);

