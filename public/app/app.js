(function() {
  'use strict'

  angular
    .module('schoolApp', ['ui.router', 'ui.bootstrap'])
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', '$state', '$rootScope'];

  function AppController($scope, $state, $rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        $scope.currentStateName = toState.name;
    });

  }

})();
