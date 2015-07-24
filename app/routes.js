var Student = require('./models/student'),
    path = require('path');

module.exports = function(app) {
  app.get('/api/students', function(req, res) {
    Student.find({}, function(err, docs) {
      if (err) res.send(err);
      res.json(docs);
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
