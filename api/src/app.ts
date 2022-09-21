require('dotenv').config(); 
// Server configuration

import express from 'express'
const morgan = require('morgan');
const bodyParser = require('body-parser');

import routes from './routes/index'
// const routes = require('./routes/index');

const {
    PORT,
} = process.env;

const app = express()

app.set('port',PORT)

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/',routes)

export default app;