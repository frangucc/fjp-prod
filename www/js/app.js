// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
    'ionic',
    'starter.services',
    'starter.controllers',
    'ngAnimate',
])


.config(function ($stateProvider, $urlRouterProvider, $sceProvider) {

    $sceProvider.enabled(false);

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
	
	.state('intro', {
        url: "/",
        templateUrl: "views/intro.html",
        controller: 'IntroCtrl'
    })
	
	
	.state('home', {
        url: "/pet",
        templateUrl: "views/list.html",
        controller: 'PetIndexCtrl'
    })
	
	.state('detail', {
        url: "/pet/:petsId",
        templateUrl: "views/detail.html",
        controller: 'PetDetailCtrl'
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

});