// Set up connection to SQL
const mysql = require('mysql');
require('dotenv').config();
let connection;

if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.PASS,
  database: 'burger_db',
});
}
// connect to SQL
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for the ORM 
module.exports = connection;
