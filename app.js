var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hello World");
});
app.get("/name", function(req, res) {
    var name = ("Kyle Mayers");
    res.send(name);
});
app.get("/surprise", function(req, res) {
    res.status(301).send("301 permentaly moved");
});

app.get("/redirect", function(req, res) {
    res.redirect("/surprise");
});
app.get("/date" , function(req, res) {
    var date = new Date();
   res.send(date); 
});

app.listen(process.env.PORT);