var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // db.connect()
      db.query('select * from messages', function (error, results) {
        if (error) {
          console.log(error);
          callback(error);
          // db.end();
        } else {
          // console.log('da poopoo ', results);
          callback(error, results);
          // db.end();
        }
      })
    }, // a function which produces all the messages
    post: function (reqBody, callback) {
      // db.connect()
      db.query(`INSERT INTO messages (id, user, text) VALUES (null, "${reqBody.username}", "${reqBody.message}")` , function (error, results) {
        if (error) {
          console.log(error);
          callback(error);
          // db.end();
        } else {
          callback(error, results);
          // db.end();
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('select * from users', function (error, results) {
        if (error) {
          console.log(error);
          callback(error);
          // db.end();
        } else {
          // console.log('da poopoo ', results);
          callback(error, results);
          // db.end();
        }
      })
     },
    post: function (reqBody, callback) {
      db.query(`INSERT INTO users (id, name) VALUES (null, '${reqBody.name}')`, function (error, results) {
        if (error) {
          console.log(error);
          callback(error);
          // db.end();
        } else {
          callback(error, results);
          // db.end();
        }
      })
      // console.log('Serving request type ' + req.method + ' for url ' + req.url);
      // res.write(req.body);
      // console.log(req);
      // res.end(JSON.stringify(req.body));
    }
  }
};

