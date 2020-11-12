const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bwbbk8tyccggy5yxhwtu-mysql.services.clever-cloud.com',
  user: 'udpk1jogr8rlgirm',
  password: 'xozUM9xvUjOirrYGl8BF',
  database: 'bwbbk8tyccggy5yxhwtu',
  multipleStatements: true
});



mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});


module.exports = mysqlConnection;