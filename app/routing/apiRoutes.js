var fs = require("fs");
var path = require("path");
var express = require("express");
var app = express();


var url = require("url");
var PORT = 8080;




var friends = path.join(__dirname, "../data/friends.js");



app.get("/api/friends", function(request, response) {

    fs.readFile(friends, "utf8", function (err, data) {
        response.end(data);
    })

});


app.post("/api/friends", function(request, response) {

    fs.readFile(friendsy, "utf8", function (err, data) {
        response.end(data);
    })

});

//responce fs.typeWrite(


app.listen(PORT, function () {
    console.log("Server is listening on:" + PORT)
});


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


app.post("/contact", function(req, res) {
    console.log('request body', req.body);
    //TODO how do I get the name?
    let name = req.body.myName; //the person who typed it
    //TODO how do I get the email?
    let email = req.body.myEmail;

    //TODO remove me after fixing the above
    // return res.end(`Raw data: ${JSON.stringify(req.body)}`);

    //TODO enable this after grabbing the variables from the POST(man) ;-)
    res.end(`<!DOCTYPE html><html><head><title>Contact Form</title> </head><body>
     Your name: ${name} <br/> 
     Your email: ${email} <br/> 
     
    </body></html>`)
});
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});