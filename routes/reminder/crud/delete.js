var express = require('express');
var router = express.Router();
 
//xoa truong hoc
router.delete('/menu_CThoc/:id', function(req,res){
	
	var id = req.params.id; 
	var sql = "delete from study_program where pro_id = '" + id + "'";
	
	connection.query(sql, function (err, rows, fields) {
		if (err) {
			res.json(0);
		}
		else {
			res.json(rows);
		}
	});
	
});


