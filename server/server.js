const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const config = require('./config')
let connectionString = config.connectionString;
const app = module.exports = express()
app.use(express.static('dist'))

app.use(bodyParser.json())

let massiveInstance = massive.connectSync({connectionString : connectionString})

app.set('db', massiveInstance);

var db = app.get('db');

const data = require('./mainCtrl')

app.get('/getAllBlogs', data.getAllBlogs)

app.get('/blog/:blogId', data.getBlogItem)

let port = 5000;

app.listen(port, function(){
  console.log('Chthulu is docked at port:', port)
})
