var express = require('express')
var mysql = require('mysql')
var cors = require('cors')

var app = express()

app.use(cors());
app.use(express.json());

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'react_db'
});


app.get('/user',function(req,res){
    connection.query("SELECT * FROM tb_user", function (err, result) {
      if (err) {
        console.log(err);
      }else {
        res.send(result)
        console.log(result);
      }
    });
  });

  app.post('/create',function(req,res){
    var sql = "INSERT INTO tb_user (name, phone) VALUES ?";
    var values = [
        [req.body.name, req.body.phone]
       ];

    connection.query(sql, [values], function (err, result, fields) {
      if (err) throw err;
      console.log("Create: " + result.affectedRows);
      console.log(values);
    });
  });



  // RUN SERVER
  const port = 8080
  const callback = () => console.log(`SERVER IS RUNNING AT PORT ${port}.`)
  app.listen(port, callback)
  module.exports = app
