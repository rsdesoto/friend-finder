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

// - A GET Route to `/survey` which should display the survey page.
// - A default, catch-all route that leads to `home.html` which displays the home page.

app.get("/survey", function(req, res) {
    console.log("survey");
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// If no matching route is found default to home
app.get("*", function(req, res) {
    console.log("Hello");
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
