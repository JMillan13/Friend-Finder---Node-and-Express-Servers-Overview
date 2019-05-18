// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// var tableData = require("../data/tableData");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  // Displays a single friend, or returns false
  app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.friend;

    console.log(chosen);

    for (var i = 0; i <friends.length; i++) {
      if (chosen ===friends[i].routeName) {
        return res.json(friends[i]);
      }
    }

    return res.json(false);
  });

  // Create newfriends - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;

    // Using a RegEx Pattern to remove spaces from newfriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

  friends.push(newfriend);

    res.json(newfriend);
  });
}
