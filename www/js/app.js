angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider ) {

    // Sign Up / Sign In Pattern

  $stateProvider

    .state('anon', {
      abstract: true,
      template: "<ion-nav-view animation='slide-left-right-ios7' />"
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
    });

    // Authenticated User Pattern

  $stateProvider

    .state('user', {
      abstract: true,
      template: "<ion-nav-bar type='bar-positive'></ion-nav-bar><ion-nav-view></ion-nav-view>"
    })

    .state('user.home', {
      url: '/',
      templateUrl: 'templates/home.html'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/launch');

}])

.run(['$rootScope', '$state', 'Auth', function($rootScope, $state, Auth) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    if(toState.name.match(/user./)) {
      if(!Auth.isSignedIn()){
        console.log("Error: seems like you tried accessing a route you don't have access to ...");
        event.preventDefault();
        $state.go('anon.launch');
      }
    }
  });
}]);

