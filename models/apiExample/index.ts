import conn from './../index';
import {MysqlError, FieldInfo} from 'mysql'

conn.query('SELECT 1 + 1 AS solution', function (error: MysqlError, results: any, fields: FieldInfo) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
  conn.end()
})


