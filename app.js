var express = require("express");
var app = express();
var port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(req,res){
  res.render("home");
});

app.listen(port, () => console.log("Server started and listening on port " + port ));
