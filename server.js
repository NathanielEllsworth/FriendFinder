var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var fs = require('fs');

var app = express();

var PORT = process.env.PORT || 3000;



var guests = [
    {
        name: "John",
        phone: "954-123-1234"
    },

    {
        name: "Nate",
        phone: "904-221-2341"
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
//app.use('/media', express.static(path.join(__dirname, 'Images')));

app.use(express.static(path.join(__dirname, 'images')));

console.log(path.join(__dirname, 'Images'));





app.get("/", function(req, res) {

    res.sendFile(__dirname + "/public/home.html");
});

app.get("/table", function(req, res) {

    res.sendFile(__dirname + "/table.html");
});

app.get("/reserve", function(req, res) {

    res.sendFile(__dirname + "/reserve.html");
});

app.get("/style.css", function(req, res) {

    fs.readFile(__dirname + "/style.css", "utf8", function(err, data) {

        res.writeHead(200, {"Content-type": "text/css"});
        res.end(data);
    })
});


// app.get("/api/:matches?", function(req, res) {
//
//     var chosen = req.params.guests;
//
//     if(chosen) {
//
//         console.log(chosen);
//
//         for (var i = 0; i < guests.length; i++) {
//
//             if(chosen === guests[i].name) {
//
//                 return res.json(guests[i]);
//             }
//         }
//
//         return res.json(false);
//     }
//
//     return res.json(guests);
//
// });



// app.post("/api/new", function(req, res) {
//
//     var newGuest = req.body;
//
//     guests.push(newGuest);
//
//     res.json(newGuest);
//
//     console.log(newGuest);
// });


app.listen(PORT, function() {
    console.log(PORT);
});



















































/*
var counter = 0;

var qAnda = [
    {
        'quest': 'I travel often within a year',
        'ans1': '<input type: "radio" name = "1" value="1">1',
        'ans2': '<input type: "radio" name = "2" value="2">2',
        'ans3': '<input type: "radio" name = "3" value="3">3',
        'ans4': '<input type: "radio" name = "4" value="4">4',
        'ans5': '<input type: "radio" name = "5" value="5">5',
    },*/
