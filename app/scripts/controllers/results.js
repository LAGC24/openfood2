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

    var currentOrderBy = 'alphabet';

    $scope.orderBy = function(orderName) {
      // Todo Set actions/filtering.
      switch (orderName) {
        case 'alphabet':
          currentOrderBy = 'alphabet';
          break;
        case 'popularity':
          currentOrderBy = 'popularity';
          break;
        case 'location':
          currentOrderBy = 'location';
          break;
      }
    };

    $scope.getOrderbyLabel = function() {
      switch (currentOrderBy) {
        case 'alphabet':
              return '<span class="fa fa-sort-alpha-asc" aria-hidden="true"></span> Alfabeto';
        case 'popularity':
              return '<span class="fa fa-fire" aria-hidden="true"></span> Popularidad';
        case 'location':
              return '<span class="fa fa-location-arrow" aria-hidden="true"></span> Cercanía';
      }
    }


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
    };

    $scope.isOnStep = function(stepToCheck) {
      if($scope.step == stepToCheck)
        return true;
      else
        return false;
    };

  }]);
