const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

// const agg = [
//   {
//     '$group': {
//       '_id': '$status', 
//       'fieldN': {
//         '$sum': '$amount'
//       }
//     }
//   }
// ];

MongoClient.connect(
    'mongodb://localhost:27017/',
 // 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(connectErr, client) {
    assert.equal(null, connectErr);
   // const coll = client.db('scool').collection('customers');
    // coll.aggregate(agg, (cmdErr, result) => {
    //   assert.equal(null, cmdErr);
    // });
    client.close();
  });