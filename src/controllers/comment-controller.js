const CommentService = require("../services/comment-service");

const commentService = new CommentService();

const create = async (req,res)=>{
    try{
        const response = await commentService.create(req.body.modelId,req.body.modelType,req.body.userId,req.body.content);
        return res.status(201).json({
            message:response,
            success:true,
        });
    }catch(err){
        return res.status(500).json({
            message:"Not created ssuccessfully",
            Error:err
        })
    }
}

module.exports = {
    create
}