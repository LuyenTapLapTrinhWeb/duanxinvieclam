var express = require('express');
var router = express.Router();
 
//sua truong hoc
router.put('/menu_CThoc/:id', function (req, res) {
    var id = req.params.id;
    var sql = "update study_program set pro_code='" + req.body.pro_code + "', pro_name='" + req.body.pro_name + "', pro_description='" + req.body.pro_description + "', pro_status='" + req.body.pro_status + "' where pro_id = '" + id + "'";

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