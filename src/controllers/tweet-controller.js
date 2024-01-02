const TweetService = require('../services/tweet-service');

const tweetService = new TweetService();

const create = async (req,res)=>{
    try {
        const data = await tweetService.create(req.body);
        return res.status(201).json({
            success:true,
            data:data,
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            err:{error},
        })
    }
}

module.exports = {
    create
}