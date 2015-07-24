(function() {
  'use strict'

  angular
    .module('schoolApp', ['ui.router', 'schoolApp.student'])
    .controller('SchoolController', SchoolController);

    SchoolController.$inject = ['$scope'];

    function SchoolController($scope) {
      var _this = this;

    }

})();
