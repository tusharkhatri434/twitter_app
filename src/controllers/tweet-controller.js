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

const getWithComments = async (req,res)=>{
    try {
        console.log(req.params.id);
        const data = await tweetService.getWithComments(req.params.id);
        return res.status(200).json({
            success:true,
            response:data,
            error:{},
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            response:{},
            err:error,
        })
    }
}

module.exports = {
    create,
    getWithComments
}