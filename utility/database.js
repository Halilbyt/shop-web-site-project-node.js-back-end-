const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database:'node-apps',
    password:'Hib_19895151',
});

module.exports = connection.promise();