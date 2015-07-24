(function() {
  'use strict'

  angular
    .module('schoolApp')
    .config(RoutesProvider);

  RoutesProvider.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesProvider($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
      url: '/'
    })
    .state('students', {
      url: '/students',
      templateUrl: 'views/studentView.html',
      controller: 'StudentController as studentCtrl'
    })

    $urlRouterProvider.otherwise('/');
  }

})();
