
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // ../public/
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
}
