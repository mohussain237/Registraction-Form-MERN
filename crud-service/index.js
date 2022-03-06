import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
require('dotenv').config();
//const express = require('express'); // 1 - with latest npm we can use import statments
// go in package.json and add type: module 
// Step 2 ------------>>>>>>>> Routing
import Routes from './server/route.js';

const app = express(); // we need to do this with every express application to initilise it with app and then we run 
// it as a fuction

// To handle HTTP POST requests in Express.js version 4 and above, you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Step 2 ------------------->
app.use('/users', Routes);

// https://www.mongodb.com/cloud/atlas
// const USERNAME = process.env.USERNAME;
// const PASSWORD = process.env.PASSWORD;
// const URL = 'mongodb+srv://user:Manrun89@cluster0.zgrax.mongodb.net/CRUDAPP?retryWrites=true&w=majority';
// const URL = 'mongodb://user:Manrun89@cluster-first-shard-00-00.zgrax.mongodb.net:27017,cluster-first-shard-00-01.zgrax.mongodb.net:27017,cluster-first-shard-00-02.zgrax.mongodb.net:27017/CRUDAPP?ssl=true&replicaSet=atlas-dair4b-shard-0&authSource=admin&retryWrites=true&w=majority'
// const URL = 'mongodb://user:codeforinterview@crudapp-shard-00-00.zgrax.mongodb.net:27017,crudapp-shard-00-01.zgrax.mongodb.net:27017,crudapp-shard-00-02.zgrax.mongodb.net:27017/CRUDAPP?ssl=true&replicaSet=atlas-as0xva-shard-0&authSource=admin&retryWrites=true&w=majority'
const URL = 'mongodb+srv://user01:MjmxfCplpsHI6zrZ@mydatabase.lojjr.mongodb.net/MACHINE_TEST?retryWrites=true&w=majority'
            
// const dotenv = require('dotenv'); //3 - but we need to tell express where to pick this port 
// It allows you to seperate your crediantials when we work in a collaborative environment
const PORT = process.env.PORT || '8080'; 

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
   
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

// We can do something like this or we can set it directly in the url as well
// mongoose.set('useFindAndModify', false);

