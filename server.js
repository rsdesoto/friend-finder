// 2. Your `server.js` file should require the basic
// npm packages we've used in class: `express` and `path`.

var express = require("express");
var path = require("path");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(__dirname);

app.use(express.static(path.join(__dirname, "/app/public")));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

/** TO DO LIST/pseudocode:
 * make sure i can read FROM the database
 * make sure i can write TO the database
 *
 * 0. page load: show the survey and the entry points for name, photo, and quick description.
 *    Data validation: if the entry points for name and desc are blank, don't let the user
 *    continue
 *
 * 1. submit button:
 *    a. log the user's information in the database -- use $.post() to create a SQL query with
 *        name
 *        desc
 *        answers
 *    b. pull the array of answers from the database. for any where the names are not identical,
 *        compare the answers for each question. log the person with the lowest overall difference
 *        array.forEach(obj,index){
 *          can turn the obj.answers via .split(",") into an array and calc the difference for each point in the array
 *          once this is done, find overall ans and store the lowest ans + index value
 *        }
 *
 * 2. display match
 *        pull name, desc, and photo on a modal
 *
 *
 *
 * 1.
 */
