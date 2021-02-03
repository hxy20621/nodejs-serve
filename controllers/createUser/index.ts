import {RequestHandler, Request, Response, NextFunction} from 'express-serve-static-core';
import conn from './../../models';
import {MysqlError, FieldInfo} from 'mysql';

/**
 *
 CREATE TABLE IF NOT EXISTS `test`(
 `id` INT UNSIGNED AUTO_INCREMENT,
 `title` VARCHAR(100) NOT NULL,
 `author` VARCHAR(40) NOT NULL,
 `date` DATE,
 PRIMARY KEY ( `id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;


 INSERT INTO test
  (title, author, date)
  VALUES
  ("学习 mysql", "教程", NOW());
 *
 * */

const CreateUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    let body = req.body;

    let title:string = body.title;
    let author:string = body.author;
    let date = new Date();

    const sql = `INSERT INTO test (title, author, date) VALUES(?, ?, ?)`;
    const addSqlParams = [title, author, date]
     if(!title){
         res.send({
             status: 200,
             message: "title 必填"
         })
     }
     if(!author){
         res.send({
             status: 200,
             message: "author 必填"
         })
     }
    conn.query(sql, addSqlParams,(error: MysqlError, results: any, fields: FieldInfo) => {

        if(error) res.send({status: 200, data: error, message: "error"});

        res.send({status: 200, data: {results}, message: "Successful operation"});
    })
}

export default CreateUser;