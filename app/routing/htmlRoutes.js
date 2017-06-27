//var http = require("http");
var fs = require("fs");
var path = require("path");
var express = require("express");


var url = require("url");
var PORT = 8080;
//var server = http.createServer(handleRequest);
var app = express();


var home = path.join(__dirname, "../public/home.html");

var survey = path.join(__dirname, "../public/survey.html");


// app.get("/");


app.get("/", function(request, response) {

    fs.readFile(home, "utf8", function (err, data) {
        response.end(data);
    })

});

app.get("/survey", function(request, response) {

    fs.readFile(survey, "utf8", function (err, data) {
        response.end(data);
    })

});

//responce fs.typeWrite(


app.listen(PORT, function () {
   console.log("Server is listening on:" + PORT)
});