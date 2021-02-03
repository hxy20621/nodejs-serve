import {RequestHandler, Request, Response, NextFunction} from 'express-serve-static-core';
import conn from './../../models';
import {MysqlError, FieldInfo} from 'mysql'

const apiExample: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    conn.query('select * from test', function (error: MysqlError, results: any, fields: FieldInfo) {
        
        if (error) res.send({
            status: 200,
            data: req.body,
            message: "error"
        })

        res.send(
            {
                status: 200,
                data: {results},
                message: "Successful operation"
            }
        );
    })
}

export default apiExample