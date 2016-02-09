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

    $scope.categories = [
      'Antojitos mexicanos',
      'Taquerías',
      'Comida italiana',
      'Pizzerias',
      'Vegetariana',
      'Mariscos'
    ];

    $scope.step = 0;
    $scope.tab = 0;
    $scope.resultType = 'Categorías';

    $scope.selectTab = function(setTab) {
      $scope.tab = setTab;

      switch (setTab) {
        case 0:
          $scope.resultType = 'Categorías';
          $scope.step = 0;
          break;
        case 1:
          $scope.resultType = 'Restaurantes';
          $scope.step = 1;
          break;
      }
    };

    $scope.isSelected = function(checkTab){
      return $scope.tab === checkTab;
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
