(function() {
  'use strict'

  angular
    .module('schoolApp')
    .controller('StudentController', StudentController);

    StudentController.$inject = ['$scope', 'Students'];

    function StudentController($scope, Students) {
      var vm = this;

      vm.seatRows = 3;
      vm.students = new Array(vm.seatRows);

      vm.compareStudents = function(a, b) {
        if (a.performanceGrade < b.performanceGrade) {
          return -1;
        }
        if (a.performanceGrade > b.performanceGrade) {
          return 1;
        }
        return 0;
      };

      Students
        .get()
        .success(function(data) {
          var cols = data.length / vm.seatRows;
          var index = 0;

          data.sort(vm.compareStudents);
          localStorage.setItem('data', JSON.stringify(data));

          for (var i = 0; i < vm.seatRows; i++) {
            vm.students[i] = new Array(cols);
            for (var j = 0; j < cols; j++) {
              vm.students[i][j] = data[index++];
            }
          }
        });
    }

})();
