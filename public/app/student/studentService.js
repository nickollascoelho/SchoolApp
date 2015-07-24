(function() {
  'use strict'

  angular
    .module('schoolApp')
    .factory('Students', Students);

    Students.$inject = ['$http'];

    function Students($http) {
      return {
        get : function() {
            return $http.get('/api/students');
        },
        find : function(id) {
            return $http.get('/api/students/' + id);
        },
        create : function(student) {
            return $http.post('/api/students', student);
        },
        delete : function(id) {
            return $http.delete('/api/students/' + id);
        }
      }
    }

})();
