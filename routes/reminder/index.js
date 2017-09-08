var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'todolist',
  password: "1234"
});
connection.connect(function (err) {
  if (!err) {
    console.log("todo db is ready!")
  } else {
    console.log(err);
  }
});

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json());

//list
router.get('/todo', function (req, res) {
  connection.query('SELECT * FROM todo', function (err, rows, fields) {
    if (err) {
      // console.log(err);
      connection.end();
      throw err;
    }
    else {
      // console.log(rows);
      res.json(rows)
    }//send data to server from database
  })
});

// one item
// router.get('/todo/:id', function (req, res) {
//     var id = req.params.id;
//     res.send('Hello, moto! ' + id);
// })
// require('./crud/add.js');

//them 
router.post('/todo', function (req, res) {
  var sql = 'INSERT INTO todo(title,reng) VALUES("' + req.body.title + '","' + req.body.reng + '")';
  connection.query(sql, function (err, rows, fields) {
    if (err) {
      connection.end();
      throw err;
    }
    else {
      res.json(rows);
    }
  });

});
// require('./crud/edit.js');
// require('./crud/delete.js');

//xoa 
router.put('/todo/:id', function (req, res) {
 
});

module.exports = router;