'use strict';

/**
 * @ngdoc function
 * @name munchieTaxiApp.controller:SearchController
 * @description
 * # SearchController
 * Controller of the munchieTaxiApp
 */
angular.module('munchieTaxiApp')
  .controller('SearchController', ['$scope', function ($scope) {

    $scope.searchTerm = undefined;

    $scope.region = undefined;

  }]);
