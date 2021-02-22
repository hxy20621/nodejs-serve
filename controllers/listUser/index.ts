import {RequestHandler, Request, Response, NextFunction} from 'express-serve-static-core';
import conn from './../../models';
import {MysqlError, FieldInfo, escape} from 'mysql';
import isNumber from "../../util/isNumber";
import toNumber from "../../util/toNumber";
const List: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    let {pageNo = 1, pageSize = 10} = req.body;

    pageSize = toNumber(pageSize);
    pageNo = toNumber(pageNo);

    if(!isNumber(pageSize)){
        res.send({
            status: 200,
            message: "error"
        })
    }
    pageNo = escape(pageNo - 1);
    pageSize = escape(pageSize)
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