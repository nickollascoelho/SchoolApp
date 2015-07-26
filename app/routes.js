var Student = require('./models/student'),
    path = require('path');

const SEAT_ROWS = 3;

module.exports = function(app) {
  app.get('/api/students', function(req, res) {
    Student.find({}, function(err, docs) {
      if (err) {
        res.send(err);
      } else {
        docs.sort(compareStudents);

        var students = new Array(SEAT_ROWS);
        var cols = docs.length / SEAT_ROWS;
        var index = 0;

        for (var i = 0; i < SEAT_ROWS; i++) {
          students[i] = new Array(cols);
          for (var j = 0; j < cols; j++) {
            students[i][j] = docs[index++];
          }
        }

        res.json(students);
      }
    });
  });

  app.post('/api/students', function(req, res) {

  });

  app.delete('/api/students/:students_id', function(req, res) {

  });

  app.get('/views/:filename', function(req, res) {
    var filename = req.params.filename;
    if(!filename) return;
    res.sendFile(path.resolve('public/app/views/' + filename));
  });

  app.get('*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
  });

};

var compareStudents = function(a, b) {
  if (a.performanceGrade < b.performanceGrade) {
    return -1;
  }
  if (a.performanceGrade > b.performanceGrade) {
    return 1;
  }
  return 0;
};
