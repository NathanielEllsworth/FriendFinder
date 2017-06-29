
var path = require("path");
var friends = require('../data/friends.js')

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {

        res.JSON(friends);

    });


    app.post("/api/friends", function (req, res) {

        app.readFile(friends, "utf8", function (err, data) {
            res.end(data);
        })

    });
}





// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: "application/vnd.api+json"}));
//
//
// app.post("/contact", function(req, res) {
//     console.log('request body', req.body);
//     //TODO how do I get the name?
//     let name = req.body.userName; //the person who typed it
//
//     //TODO remove me after fixing the above
//     // return res.end(`Raw data: ${JSON.stringify(req.body)}`);
//
//     //TODO enable this after grabbing the variables from the POST(man) ;-)
//     res.end(`<!DOCTYPE html><html><head><title>Contact Form</title> </head><body>
//      Your name: ${name} <br/>
//
//     </body></html>`)
// });
// // =============================================================
// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
// });