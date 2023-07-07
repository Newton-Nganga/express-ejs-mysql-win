const mysql = require('mysql2')
//your credentials
//You could save the creadentials in a dotenv file
const connection = mysql.createConnection({
  host: 'mysql-117598-0.cloudclusters.net', //use localhost or 127.0.0.1
  user: 'admin',
  password: '1FnGiQYa',
  database: 'test',
  port:'10037' //The db port
});


//try to make a connection
connection.connect((err) => {
  console.log('==== TRYING TO CONNECT TO THE DB ====')
  if(!err) {
    console.log('Connected to MySQL database');
  }
  else {
    console.log("==== COULDN'T CONNECT TO THE DB",err);
  }
});



module.exports = connection;
