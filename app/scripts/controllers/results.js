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
      { name: 'Pizzerías', iconClass: 'flaticon-pizza3' },
      { name: 'Comida rápida', iconClass: 'flaticon-fast-food' },
      { name: 'Vegetariana', iconClass: 'flaticon-salad' },
      { name: 'Mariscos', iconClass: 'flaticon-fishes9' },
      { name: 'Oriental', iconClass: 'flaticon-noodles4' },
      { name: 'Sushi', iconClass: 'flaticon-sushi15' }
    ];

    $scope.restaurants = [
      { nameId: 'Pizza Hut', categoryNameId: 'Pizzerías', imgSrc: 'images/restaurants/logos/PizzaHut_logo-219x286.png' },
      { nameId: 'Domino\'s Pizza', categoryNameId: 'Pizzerías', imgSrc: 'images/restaurants/logos/10.png' }
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



    var paths = {
      'cat': { urlName: 'categorias', viewName: 'Categorías' },
      'rst': { urlName: 'restaurantes', viewName: 'Restaurantes' },
      'mnu': { urlName: 'menu', viewName: 'Menú' }
    };

    var tabModel = [
      { // Category Tab
        rootPathLevelId: 'cat', // Dictates the root-level's path name
        step: 'cat',            // Dictates path level. (should deprecate, use selections instead as path)
        selections: []          // Example: { type: 'cat', nameId: 'Pizzerías' }, { type: 'rst', nameId: 'Pizza Hut' }
      },
      { // Restaurant Tab
        rootPathLevelId: 'rst',
        step: 'rst',
        selections: []
      }
    ];
    $scope.tabModel = tabModel;


    var currentTabIndex = 0;
    $scope.resultType = 'Categorías';



    $scope.selectTab = function(setTabIndex) {
      currentTabIndex = setTabIndex;
      // Here would call event suscribed directives.
    };
    $scope.isTabSelected = function(checkTab){
      return currentTabIndex === checkTab;
    };

    $scope.processSelection = function(selection, type) {
      var currentTab = tabModel[currentTabIndex];
      if (type === 'category') {
        currentTab.selections.push({ type: 'cat', nameId: selection.name });
        currentTab.step = 'rst';
      }
      else if (type === 'restaurant') {
        currentTab.selections.push({ type: 'rst', nameId: selection.nameId });
        currentTab.step = 'mnu';
      }

      console.log(selection, type);
    };

    /**
     * Check if is the current tab on the specified step.
     * @param stepToCheck
     * @returns {boolean}
       */
    $scope.isOnStep = function(stepToCheck) {
      return stepToCheck === tabModel[currentTabIndex].step;
    };


    $scope.getRestaurants = function() {
      // TODO filtering (current implementation just for demo)
      return $scope.restaurants;
    };


    // Navigation path (should be another module)
    var pathHierarchy = [];
    $scope.getCurrentTabPathHierarchy = function() {
      // Clear the array.
      //pathHierarchy.length = 0;
      while(pathHierarchy.length > 0) {
        pathHierarchy.pop();
      }

      const currentTab = tabModel[currentTabIndex];

      const rootPath = paths[currentTab.rootPathLevelId];

      pathHierarchy.push({ pathIdType: currentTab.rootPathLevelId, url: rootPath.urlName, text: rootPath.viewName });  // Each one is a 'hierarchy Path'

      // Repeat for each selection/level
      angular.forEach(currentTab.selections, function(selection, index) {
        // Todo Should change url to use a better urlName (i.e. without accents)
        var hierarchyPath = { pathIdType: selection.type, url: selection.nameId, nameId: selection.nameId };

        this.push(hierarchyPath);
      }, pathHierarchy);

      return pathHierarchy;

      //'<li ng-repeat="hierarchyPath in getCurrentTabPathHierarchy()"><a ng-href="{{hierarchyPath.url}}" ng-click="changePath(hierarchyPath.pathIdType, hierarchyPath.nameId)">{{hierarchyPath.nameId}}</a></li>'
      //
      //'<li><a nhref="{{resultsCtrl.resultType}}/{{searchTerm}}" ng-click="processItem(0)">{{resultsCtrl.resultType}} ({{searchTerm}})</a></li>'
      //'<li ng-show="resultsCtrl.isTabSelected(0)"><a href="" ng-click="processItem(1)">Restaurantes</a></li>'
      //'<li class="-active"><a href="" ng-click="processItem(2)">restaurant-menu</a></li>'
    };

  }]);
