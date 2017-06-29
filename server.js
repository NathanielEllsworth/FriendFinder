var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 3010;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
//app.use('/media', express.static(path.join(__dirname, 'Images')));

console.log(path.join(__dirname, 'Images'));

app.use(express.static('./app/static' ));

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function() {

    console.log('Server listening on %d', PORT)
})




















































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
