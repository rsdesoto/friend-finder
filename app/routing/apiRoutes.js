// Dependencies
var connection = require("./connection.js");

/**
 * Methods for export:
 */
module.exports = function(app) {
  /**
   * Basic "get" route for pulling up all data from the database.
   */
  app.get("/api/friends", function(req, res) {
    connection.query("SELECT * FROM friends", function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  /**
   * Basic "post" route for adding a new user to the database.
   */
  app.post("/api/friends", function(req, res) {
    connection.query(
      "INSERT INTO friends (name, friend_desc,pic_url,answers) VALUES(?,?,?,?)",
      [req.body.name, req.body.friend_desc, req.body.pic_url, req.body.answers],
      function(err, data) {
        if (err) throw err;

        res.json(data);
      }
    );
  });
};
