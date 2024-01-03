const express = require('express');
const  connect  = require('./config/database');
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require("./router/index");
const Tweet = require('./models/tweet');
const  UserRepository  = require("./repository/user-repository");
const LikeService = require('./services/like-service');

const port = 3002

async function serverStart (){

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));

   app.use('/api',apiRoutes);

    app.listen(port,async () =>{
        console.log(`Example app listening on port ${port}!`)
        await connect();
        const userRepository = new UserRepository();
        const tweet = await Tweet.find({});
        // await userRepository.create({
        //     name:"tushar",
        //     password:"Tushar@1111",
        //     email:"tushar@admin.com"
        // })
        const user = await userRepository.getAll();


        const likeService = new LikeService();
        await likeService.toggleLike(tweet[0].id, "Tweet", user[0].id);
        });

}
serverStart();