const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'adam_ecommerce',
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = db.promise(); // Using promise() makes your code cleaner