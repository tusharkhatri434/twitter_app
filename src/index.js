const express = require('express');
const  connect  = require('./config/database');
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require("./router/index");

const port = 3002

function serverStart (){

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));

   app.use('/api',apiRoutes);

    app.listen(port,async () =>{
        console.log(`Example app listening on port ${port}!`)
        await connect();
        });

}
serverStart();