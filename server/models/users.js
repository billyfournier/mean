console.log('**** model linked ****');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UsersSchema = new mongoose.Schema({
  email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            validate: {
              validator: function( value ) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
              },
              message: 'Please fill a valid email address'
            }
          },
  fname: {
          type: String,
          required: [true, "this is for something else"],
          trim: true,
        },
  lname: {
          type: String,
          required: true,
          trim: true
        },
  pwd: {
          type: String,
          required: true,
          minlength: 4,
          maxlength: 512,
          select: false,
          // validate: {
          //   validator: function( value ) {
          //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          //   },
          //   message: "Password failed validation, you must have at least 1 number, uppercase and special character"
          // }
        },
  bday: Date,
});
var Users = mongoose.model('Users', UsersSchema);

UsersSchema.post('validate',function(data){
  if(data.pwd){
    data.pwd = bcrypt.hashSync(data.pwd, bcrypt.genSaltSync(8));
    console.log(JSON.stringify(data));
  }
});
