import {dbUrl} from './config'
import express = require('express');
import fileUpload = require('express-fileupload');
import socket = require('socket.io')


import {json} from 'body-parser';
import routes from './routes';

const cors = require('cors');

const app = express();


app.use(cors());

app.all('*', (req, res, next) => {
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