const mysql = require('mysql')
// const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection
} else {
    connection = mysql.createConnection({
        host: 'localhost'
        user: 'root',
        password: '',
        database: 'wouldyourather_db'
    });

};

connection.connect();
module.exports = connection;
