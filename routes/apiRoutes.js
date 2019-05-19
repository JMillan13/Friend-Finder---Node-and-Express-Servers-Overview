// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friends = require("./friends");
// var tableData = require("../data/tableData");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  // Create newfriends - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;

    var bestDiff =  999;

    var bestMatch = {};


    friends.forEach(function(currentFriend, i){

      var currentDiff = 0;

      currentFriend.scores.forEach(function(score, index){

          currentDiff += Math.abs(score - newfriend.scores[index]);

      });

      if (currentDiff < bestDiff){
      	bestDiff = currentDiff;
        bestMatch = currentFriend;
      }


    });

    friends.push(newfriend);

    res.json(bestMatch);
  });
}
