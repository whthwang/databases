var models = require('../models');
// var mysql = require('mysql');
// var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((error, results) => {
        if (error) {
          console.log(error);
          res.sendStatus(404);
          res.end();
        } else {
          res.status(200).send(JSON.stringify(results));
        }
      })
    },
    post: function (req, res) {
      models.messages.post(req, res);
      res.end();
    }
  },

  users: {
    get: function (req, res) {
      res.send('hello from users.get');
      res.end();
    },
    post: function (req, res) {
      console.log('Serving request type ' + req.method +  ' for url ' + req.url);
      db.insert();
      // res.write(req.body);
      // console.log(req);
      res.end(JSON.stringify(req.body));
    }
  }
};

