var mysql = require("mysql");
// 3. Your `htmlRoutes.js` file should include two routes:

// 2. Your `server.js` file should require the basic
// npm packages we've used in class: `express` and `path`.

var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "friend_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

// Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
    console.log(req.params);

    connection.query("SELECT * FROM friends", function(err, data) {
        console.log(data);
    });
});

// // - A GET Route to `/survey` which should display the survey page.
// // - A default, catch-all route that leads to `home.html` which displays the home page.

// app.get("/survey", function(req, res) {
//     console.log("survey");
//     res.sendFile(path.join(__dirname, "../public/survey.html"));
// });

// // If no matching route is found default to home
// app.get("*", function(req, res) {
//     console.log("Hello");
//     res.sendFile(path.join(__dirname, "../public/home.html"));
// });

// app.post("/api/friends", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     friendData.push(req.body);
// });

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
