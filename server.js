//import express
var express = require('express');
var app = express();
var path = require('path');

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "pug");
app.set("views", "views");

//routing
app.get('/render', (req, res) => {
    // res.render("index");
});

// app.get('/photos/:albumId/:id', function (req, res) {
//     var albumId = req.params.albumId, id = req.params.id;
//     console.log(albumId, id);
// });
app.listen(3000, () => { console.log("Hello", 3000) });