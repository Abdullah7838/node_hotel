const express = require('express')
const app = express();
const db = require('./db.js');
const bodyParser = require('body-parser')
app.use(bodyParser.json()); //req.body


app.get('/', function (req, res) {
  res.send('HI! Welcome to Our Hotel')
})

const Personroutes = require('./routes/personRoutes');
const menuRouter   = require('./routes/menuRouter');

app.use('/person',Personroutes);
app.use('/menu',menuRouter);

app.listen(3000,()=>{
    console.log('Server Running');
})