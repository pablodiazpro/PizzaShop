/**
 * Created by pablo on 2/19/2017.
 */
var http = require("http");
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

var hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
   res.render("home", { title: "Hello from WebStorm", message: "Hi, there!" });
});

var server = http.createServer(app);

server.listen(3000);