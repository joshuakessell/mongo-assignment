const db = require('../models');

module.exports = function (app) {

  //get users to populate drop-down lists
  app.get('/api/user', function (req, res) {
    db.User.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //get kudos to render html
  app.get('/api/kudos', function (req, res) {
    db.Kudos.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  
  app.post('/api/kudos', function (req, res) {
    db.Kudos.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}