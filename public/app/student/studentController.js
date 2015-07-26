(function() {
  'use strict'

  angular
    .module('schoolApp')
    .controller('StudentController', StudentController);

    StudentController.$inject = ['$scope', 'Students'];

    function StudentController($scope, Students) {
      var _this = this;

      _this.students = [];

      Students
        .get()
        .success(function(data) {
          localStorage.setItem('data', JSON.stringify(data));
          _this.students = data;
        });
    }

})();
