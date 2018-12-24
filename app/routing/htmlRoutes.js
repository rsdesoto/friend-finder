// Dependencies
var path = require("path");

/**
 * Methods for export -
 */
module.exports = function(app) {
  /**
   * Direct users to the "survey" HTML file
   */
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  /**
   * If not on the survey page, send users to the home page
   */
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
