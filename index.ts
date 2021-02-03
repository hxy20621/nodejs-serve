// import {dbUrl} from './config'
import {RequestHandler, Request, Response, NextFunction} from 'express-serve-static-core';
import express = require('express');
import fileUpload = require('express-fileupload');
// import socket = require('socket.io')


import {json} from 'body-parser';
import routes from './routes';

import morgan = require('morgan');

const cors = require('cors');

const fs = require('fs');
const path = require('path');
const dayjs = require("dayjs");
const app = express();

const logTime = dayjs(new Date()).format("YYYY-MM-DD")
if (!fs.existsSync(path.join(`${__dirname}/logs`))) {
    fs.mkdirSync(path.join(`${__dirname}/logs`))
}
const accessLogStream = fs.createWriteStream(path.join(`${__dirname}/logs`, `${logTime}.log`), {flags: 'a'})
morgan.token('localDate', (req) => {
    return dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss SSS [Z] A')
})
morgan.format('combined', ':remote-addr - :remote-user [:localDate] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');
app.use(morgan('combined', {stream: accessLogStream}))

app.use(cors());

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
})


app.use(fileUpload({createParentPath: true}));

app.use(json({limit: "1mb"}));

app.use(routes);

app.use('/images', express.static('images'));


app.listen(9091, () => {
    console.log('Welcome')
});