const express = require('express');
const  connect  = require('./config/database');
const app = express();
const Comment = require('./models/comment');
const Tweet = require('./models/tweet');

const port = 3000

function serverStart (){
    app.listen(port,async () =>{
        await connect();
         console.log(`Example app listening on port ${port}!`)
           
        });

}
serverStart();