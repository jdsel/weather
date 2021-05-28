const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.get('/', function(req, res){
    res.render('client\index.js');
  });
  

app.listen(process.env.PORT, console.log('App is running on ' + process.env.PORT));
