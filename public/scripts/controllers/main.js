'use strict';

/**
 * Created by Edmundo on 2/8/2016.
 *
 * @ngdoc function
 * @name munchieTaxiApp.controller:MainController
 * @description
 * # MainController
 * Controller of the munchieTaxiApp
 */
angular.module('munchieTaxiApp')
  .controller('MainController', ['$scope', function ($scope) {

    $scope.isAddCompressed = false;

    $scope.searchTerm = '';
    $scope.searchRegion = '';

    $scope.processSearch = function(searchTerm, region) {
      $scope.isAddCompressed = true;

      $scope.searchTerm = searchTerm;
      $scope.searchRegion = region;
      console.log('test');
    }

  }]);
