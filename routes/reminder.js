var express = require('express');
var router = express.Router();

var mysql = require('mysql');
// var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'todolist',
  password: "1234"
});
connection.connect(function (err) { if (!err) console.log("todo db is ready!") });

// parse application/x-www-form-urlencoded
// router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// router.use(bodyParser.json());

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
module.exports = router;