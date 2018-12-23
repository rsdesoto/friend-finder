// 3. Your `htmlRoutes.js` file should include two routes:
var mysql = require("mysql");

var connection = require("./connection.js");

// 2. Your `server.js` file should require the basic
// npm packages we've used in class: `express` and `path`.

module.exports = function(app) {
  // connection.query("SELECT * FROM friends", function(err, data) {
  //     if (err) throw err;
  //     console.log(data);
  // });

  connection.query("SELECT name FROM friends WHERE id = 2", function(
    err,
    data
  ) {
    console.log(data[0].name + " connected");
  });

  // Basic route that sends the user first to the AJAX Page
  app.get("/api/friends", function(req, res) {
    console.log("hello");
    connection.query("SELECT * FROM friends", function(err, data) {
      if (err) throw err;
      //   console.log(data);

      res.json(data);
    });
  });

  // INSERT INTO friends (name,friend_desc,answers)
  // VALUES("bigfoot","likes long walks in the forest","4,4,4,4,4,4,4,4,4,4"),
  // ("mothman","light my fire, baby","5,5,5,5,5,5,5,5,5,5"),
  // ("jersey devil","[wordless screams]","1,1,1,1,1,1,1,1,1,1")

  app.post("/api/friends", function(req, res) {
    console.log(req.body);

    connection.query(
      "INSERT INTO friends (name, friend_desc,answers) VALUES(?,?,?)",
      [req.body.name, req.body.friend_desc, req.body.answers],
      function(err, data) {
        if (err) throw err;
        console.log(data);

        res.json(data);
      }
    );
  });
};

// 4. Your `apiRoutes.js` file should contain two routes:

//    - A GET route with the url `/api/friends`.
//    This will be used to display a JSON of all possible friends.
//    - A POST routes `/api/friends`. This will be
//    used to handle incoming survey results.
//    This route will also be used to handle the compatibility logic.

// 5. In addition to the two routes, your apiRoutes.js file
// will included a connection to your database and the required
// logic to read and write data. Be sure to require the 'mysql'
// npm package!
//    Be sure to reference the MySQLHerokuDeploymentProcess.pdf
//    file guidance in setting up your database to work on heroku,
//     but your connection will look something like this:
