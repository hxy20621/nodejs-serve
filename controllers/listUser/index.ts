import {RequestHandler, Request, Response, NextFunction} from 'express-serve-static-core';
import conn from './../../models';
import {MysqlError, FieldInfo} from 'mysql';

const List: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const listArray: object = [];
    let {pageNo = 1, pageSize = 10} = req.body;
    pageNo = pageNo - 1;
    let sql = `select * from test where id > ${pageNo}*${pageSize} limit ${pageSize}`;
    // `select * from test`

    conn.query(sql, function (error: MysqlError, results: any, fields: FieldInfo) {

        if (error) res.send({
            status: 200,
            data: req.body,
            message: "error"
        })

        res.send(
            {
                status: 200,
                data: results,
                message: "Successful operation"
            }
        );
    })
}

export default List