// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // Sign Up / Sign In Pattern

    .state('launch', {
      url: "/launch",
      templateUrl: "templates/launch.html"
    })

    .state('launch.signUp', {
      url: '/signUp',
      templateUrl: 'templates/signUp.html'
    })

    .state('launch.signIn', {
      url: '/signIn',
      templateUrl: 'templates/signIn.html'
    })

    .state('launch.passwordRecovery', {
      url: '/passwordRecovery',
      tempalteUrl: 'templates/passwordRecovery.html'
    })

    // Authenticated User Pattern

    .state('tab.pet-detail', {
      url: '/pet/:petId',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'templates/adopt.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/launch');

});

