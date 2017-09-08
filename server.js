//import express
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var multer = require('multer');
var upload = multer();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(upload.array()); 

app.set("view engine", "pug");
app.set("views", "views");

//reminder-app
app.use(require('./routes/reminder/index'));

// app.get('/photos/:albumId/:id', function (req, res) {
//     var albumId = req.params.albumId, id = req.params.id;
//     console.log(albumId, id);
// });
app.listen(port, () => { console.log("Hello", 3000) });
