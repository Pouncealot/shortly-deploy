var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('yay!')
});
var Schema = mongoose.Schema;

module.exports.urlSchema = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
})


module.exports.userSchema = new Schema({
  username: {type: String, unique: true},
  password: String,
  time: { type : Date, default: Date.now }
})


// var bob = new User({
//   username: 'bob',
//   password: 'bobblob'
// });
// console.log(bob)
// bob.save(function(err,bob){
//   if(err) throw err;
//   console.log(bob);
// })

// var YOLO = new User({
//   username: 'YOLO',
//   password: 'swag'
// })
// YOLO.save(function(err,yolo){
//   if(err) throw err;
//   console.log(yolo);
// })

// User.find(function(err,yolo){
//   if(err) throw err;
//   console.log(yolo);
// })

// var Bookshelf = require('bookshelf');
// var path = require('path');

// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;
