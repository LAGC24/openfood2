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
      //{ name: 'Antojitos mexicanos', iconClass: 'flaticon-mexican8' },
      { name: 'Taquerías', iconClass: 'flaticon-mexican8' },
      { name: 'Carne asada', iconClass: 'flaticon-steak' },
      { name: 'Comida italiana', iconClass: 'flaticon-spaghetti1' },
      { name: 'Pizzerias', iconClass: 'flaticon-pizza3' },
      { name: 'Comida rápida', iconClass: 'flaticon-fast-food' },
      { name: 'Vegetariana', iconClass: 'flaticon-salad' },
      { name: 'Mariscos', iconClass: 'flaticon-fishes9' },
      { name: 'Oriental', iconClass: 'flaticon-noodles4' },
      { name: 'Sushi', iconClass: 'flaticon-sushi15' }
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
