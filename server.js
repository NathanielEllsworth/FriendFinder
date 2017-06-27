
var http = require("http");
var path = require("path");
var express = require("express");
var app = express();


var PORT = 8080;
var server = http.createServer(handleRequest);



function handleRequest(request, response) {
    response.end("It Works!! Path Hit: " + request.url);
}

server.listen(PORT, function() {

    console.log("Server on: http://localhost:%s", PORT);

});