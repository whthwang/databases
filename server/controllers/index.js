var models = require('../models');
// var mysql = require('mysql');
// var db = require('../db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('chat','student','student');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((error, results) => {
        if (error) {
          console.log(error);
          res.status(404);
          res.end();
        } else {
          res.status(200).send(JSON.stringify(results));
        }
      })
    },
    post: function (req, res) {
      models.messages.post(req.body, (error, results) => {
        if (error) {
          console.log(error);
          res.status(404).end();
        } else {
          // console.log(req.body);
          res.status(200).send(JSON.stringify(results));
        }
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get((error, results) => {
        if (error) {
          console.log(error);
          res.status(404).end();
        } else {
          res.status(200).send(JSON.stringify(results));
        }
      })
    },
    post: function (req, res) {
      models.users.post(req.body, (error, results) => {
        if (error) {
          console.log(error);
          res.status(404).end();
        } else {
          res.status(200).end(JSON.stringify(results));
        }
      })
      // console.log('Serving request type ' + req.method +  ' for url ' + req.url);
      // db.insert();
      // res.write(req.body);
      // console.log(req);
      // res.end(JSON.stringify(req.body));
    }
  }
};

