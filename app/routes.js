var Student = require('./models/student');

module.exports = function(app) {
  app.get('/api/students', function(req, res) {

  });

  // create todo and send back all todos after creation
  app.post('/api/students', function(req, res) {

  });

  // delete a todo
  app.delete('/api/students/:students_id', function(req, res) {

  });

  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
      res.sendfile('../public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
};
