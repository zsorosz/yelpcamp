var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("this will be the landing page soon!");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("The YelpCamp Server Has Started!");
});