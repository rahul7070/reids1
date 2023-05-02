const {Blogs} = require("../model/blogs.model")

const authorize = async (req,res,next)=>{
    const userRole = req.role;
    const userId = req.userId
    const {id} =req.params
    if(userRole==="Moderator"){
        next()
    }else if (id){
        const blog= await Blogs.findById(id);
        if(blog.userId===userId){
            next()
        }else{
            res.status(401).send({msg:"Unauthorized"})
        }
    }else{
        res.status(401).send({msg:"Unauthorized"})
    }
};


module.exports = {authorize}