// var MongoClient = require('./').MongoClient;

// function healthCheck(callback) {
//   MongoClient.connect('mongodb://localhost:31000,localhost:31001,localhost:31002/test', function(err, db) {
//     var r = err;

//     // setTimeout(function() {
//       db.close(true, function(err, result) {
//         callback(r);
//       });
//     // }, 1000)
//   });
// }

// function routine() {
//   healthCheck(function(r) {
//     console.log(r);
//   });

//   setTimeout(routine, 30000);
// }

// routine();

MongoClient.connect('mongodb://ole:ole@localhost:27017/test', function(err, db) {
  console.dir(err)
  console.dir(db)
});