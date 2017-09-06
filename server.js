//import express
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
// var bodyParser = require('body-parser');

//reminder-app
var reminder = require('./routes/reminder');


// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())


//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "pug");
app.set("views", "views");

app.use(reminder);

// app.get('/photos/:albumId/:id', function (req, res) {
//     var albumId = req.params.albumId, id = req.params.id;
//     console.log(albumId, id);
// });
app.listen(port, () => { console.log("Hello", 3000) });
