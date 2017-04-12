const mysql = require('mysql');
const createTables = require('./config');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});

connection.connect(err => {
  createTables(connection);
});

module.exports = connection;