const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const routeAdmin = require('./routes/admin');
const routeUser =  require('./routes/user');

mongoose.connect("mongodb://localhost:27017/contactlist",{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

mongoose.connection.on("connected",() => {
    console.log("Connected to mongodb @ 27017")
})

mongoose.connection.on("error",(err) => {
    if(err){
        console.log("Error in mongodb connection: " + err)
    }
})

const port = 3000;
app.use(bodyparser.json());
app.use(cors());

app.use('/api/admin',routeAdmin);
app.use('/api/user',routeUser);

app.get('/',(req,res) => {
    res.send('foobar');
})

app.listen(port,() => {
    console.log('server started at port: ' + port);
})
