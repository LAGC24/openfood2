'use strict';

/**
 * @ngdoc function
 * @name munchieTaxiApp.controller:ResultsController
 * @description
 * # ResultsController
 * Controller of the munchieTaxiApp
 */
angular.module('munchieTaxiApp')
  .controller('ResultsController', ['$scope', function ($scope) {

    $scope.step = 0;
    this.tab = 0;
    this.resultType = 'Categorías';

    this.selectTab = function(setTab) {
      this.tab = setTab;

      switch (setTab) {
        case 0:
          this.resultType = 'Categorías';
          $scope.step = 0;
          break;
        case 1:
          this.resultType = 'Restaurantes';
          $scope.step = 1;
          break;
      }
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };

    $scope.processItem = function(item) {
      if (item == 2) {
        $scope.step = 2;
      }
      else {
        $scope.step = 0;
      }
    }

  }]);
