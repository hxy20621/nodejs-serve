import { dbUrl } from './config'
import express = require('express');
import fileUpload = require('express-fileupload');
import socket = require('socket.io')


import {json} from 'body-parser';
import routes from './routes';

const cors = require('cors');

const app = express();
console.log(dbUrl)




app.use(cors());


app.use(fileUpload({createParentPath: true}));

app.use(json({limit: "1mb"}));

app.use(routes);

app.use('/images', express.static('images'));


app.listen(9091, () => {
  console.log('Welcome')
});