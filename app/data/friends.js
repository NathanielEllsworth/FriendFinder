//console.log("200");

var express = require("express");

var app = express();
var PORT = 8080;


//friends Data

var characters = [{


    personName: "Carson",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},{
    personName: "Joey",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},{
    personName: "Amanda",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},{
    personName: "Scott",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}];

/*{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
    5,
    1,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    1
]
}*/

// ROUTES
//===================================

app.get("/", function(req, res) {
    res.send("This is where the Home.html will be!");
});

app.get("/api/:characters?", function (req, res){

    var chosen = req.params.characters;

    if (chosen){
        console.log(chosen);

        for (var i = 0; i <characters.length; i++){
            if (chosen === characters [i].personName) {
                res.json(characters[i]);
            }
        }
        res.send("No character found");
    }
    res.json(characters);

});


//LISTENER
//=======================================

app.listen(PORT, function(){
   console.log("App listening on PORT" + PORT);
});


























