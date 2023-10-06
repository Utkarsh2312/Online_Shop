const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "node-complete",
    password: "Utkarsh_@#7"
});

module.exports = pool.promise();