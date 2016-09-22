console.log('**** users controller');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Users = mongoose.model('Users');

function UsersController(){

  this.index = function(req,res){
    console.log('index()');
    Users.find({},function(err, friends){
      if(err){
        res.json({error: err});
      }
      else {
        res.json({friends: friends})
      }
    });
  };


  this.create = function(req,res){
    console.log('UsersController.create()');
    console.log(req.body);
    // req.body.pwd = bcrypt.hashSync(req.body.pwd, bcrypt.genSaltSync(8));
    var user = new Users(req.body);
    user.save(function(err){
      if(err){
        console.log(err);
        res.json({error: err})
      }
      else {
        console.log('Save successful');
        Users.findOne({email: req.body.email}, '-pwd',function(err, user){
          if(err){
            console.log(err);
          }
          else {
            console.log(JSON.stringify(user));
            res.json({user: user});
          }
        });
      }
    })
  };


  this.update = function(req,res){
    res.json({placeholder:'update'});
  };

  this.delete = function(req,res){
    res.json({placeholder:'update'});
  };

  this.show = function(req,res){
    res.json({placeholder:'update'});
  };
}
usersController = new UsersController();
module.exports = usersController;
