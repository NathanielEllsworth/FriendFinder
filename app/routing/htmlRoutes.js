//var http = require("http");

var path = require("path");


module.exports = function(app) {

    app.get('/', function(app){
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    })

    app.get('/survey', function(app) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'))
    })
}











//app.use(express.static('../data'));






