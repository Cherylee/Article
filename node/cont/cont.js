/**
 * Created by lenovo on 2017/7/6.
 */
var mysql = require('mysql');

exports.pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'exp'
})
