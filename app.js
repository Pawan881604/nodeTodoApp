const express = require('express');
const path = require('path')
const route = require('./routers/taskRouters')
const bodyParser = require('body-parser');
const db = require('./config/config')
const app = express()
db()

app.use(express.json())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname+'/src')))
const views = path.join(__dirname+'/src/views')
app.set('view engine','ejs');
app.set('views',views)


// here we can print all routes
app.use(route)

module.exports = app