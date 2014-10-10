var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');




db.userSchema.pre('save', function(next){
    console.log('saving and hashing pw')
    this.hashPassword(next);
});

db.userSchema.methods.comparePassword= function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
};
db.userSchema.methods.hashPassword= function(next){
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
  .then(function(hash) {
    this.password =  hash;
    next();
  });
};
var User = mongoose.model('User', db.userSchema);

User.prototype.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    callback(isMatch);
  });
};

module.exports = User;
