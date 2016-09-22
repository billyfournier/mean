console.log('**** routes');
var mongoose = require('mongoose');

require('../controllers/users.js');  //path to controller file
module.exports = function(app){
  app.get('/user', usersController.index);
  app.get('/user/:id', usersController.show);
  app.post('/user', usersController.create);
  app.put('/user/:id', usersController.update);
  app.delete('/user/:id', usersController.delete);
}
