//var http = require("http");
var fs = require("fs");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");


var url = require("url");
var PORT = 8080;
//var server = http.createServer(handleRequest);
var app = express();


var home = path.join(__dirname, "../public/home.html");

var survey = path.join(__dirname, "../public/survey.html");

var style = path.join(__dirname, "../public/style.css");

var dataQ = path.join(__dirname, '../data/questions.js');

//--------------------------------------------------------------







var dataQ = path.join(__dirname, '../data/questions.js');



// app.get("/");


app.get("/", function(req, res) {

    res.sendFile(home)

});

app.get("/survey", function(req, res) {

    res.sendFile(survey)

    /*fs.readFile(survey, "utf8", function (err, data) {
        response.end(data);
    })*/
});


app.get("/style.css", function(req, res) {

    res.sendFile(style);

});


//responce fs.typeWrite(


app.listen(PORT, function () {
   console.log("Server is listening on:" + PORT)
});











//app.use(express.static('../data'));






