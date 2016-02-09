'use strict';

/**
 * Created by Edmundo on 2/8/2016.
 *
 * @ngdoc overview
 * @name munchieTaxiApp
 * @description
 * # munchieTaxiApp
 *
 * Main module of the application.
 */
angular
  .module('munchieTaxiApp', [
    'ngAnimate',
    'ngRoute'
  ])
  /*.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'services'
      })
      .when('/solutions', {
        templateUrl: 'views/solutions.html',
        controller: 'SolutionsCtrl',
        controllerAs: 'solutions'
      })
      .when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'ClientsCtrl',
        controllerAs: 'clients'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
    //.when('/Book/:bookId', {
    //  templateUrl: 'book.html',
    //  controller: 'BookController',
    //  resolve: {
    //    // I will cause a 1 second delay
    //    delay: function ($q, $timeout) {
    //      var delay = $q.defer();
    //      $timeout(delay.resolve, 1000);
    //      return delay.promise;
    //    }
    //  }
    //})
    //.when('/Book/:bookId/ch/:chapterId', {
    //  templateUrl: 'chapter.html',
    //  controller: 'ChapterController'
    //});

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(false);
  })*/;
