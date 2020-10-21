import {MysqlError} from 'mysql'

const config = require('./../db.config')
const mysql = require('mysql')

// interface configInterface {
//   host: string,
//   port: number,
//   user: string,
//   password: string,
//   database: string
// }
const connection = mysql.createConnection(config)

connection.connect((error: MysqlError) => {
  if (error) {
    console.log(`[query] - : ${error}`);
    return
  }
  console.log('[connection connect]  succeed!');
})

export default connection