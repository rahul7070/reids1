const { Blogs } = require("../model/blogs.model")
//create blogs
const CreateBlogs = async (req, res) => {
    try {
        const data = req.body

        const Blog = new Blogs({ ...data, userId: req.userId })
        await Blog.save()
        console.log("CreatedBlogs")

        res.status(200).send({ "msg": "Blogs has been created", Blog })
    } catch (error) {
        //error checking
        console.log("error:Createblogs")

        res.status(400).send({ msg: error.message })
    }
}

//get all myblogs users blogs
const myblogs = async (req, res) => {
    try {
        const { userId } = req

        console.log("GetAllBlogs")
        const AllMyblogs = await Blogs.find({ userId })

        res.status(200).send({ No_of_data: AllMyblogs.length, data: AllMyblogs })
    } catch (error) {
        console.log("error:GetAllBlogs")
        res.status(400).send({ msg: error.message })
    }
}

///get all blogs , moderator has permission to check all the blogs below controller is for that only 
//for Moderator
const getBlogs = async (req, res) => {
    try {

        const blogs = await Blogs.find()

        console.log("getBlogsAsModerator")

        res.status(200).send({ No_of_data: blogs.length, data: blogs })
       
    } catch (error) {
        console.log("error:getBlogsAsModerator")
        res.status(400).send({ msg: error.message })
    }
}

///All authenticate user has access to read anyones blogs by their id 
//for Moderator
const getOneBlog = async (req,res) =>{
     const { id } = req.params
     
     try {
        const getoneblog=await Blogs.findById(id)
        console.log("getOneBlog")
        res.status(200).send(getoneblog)
     } catch (error) {
        console.log("error:getOneBlog")
        res.status(400).send({ msg: error.message })
     }
}

///update 
//for moderator
const updateBlog = async (req,res) =>{
     const { id } = req.params
     const payload = req.body
    try {
       const updated =  await Blogs.findByIdAndUpdate({_id:id},payload)
        res.status(200).send({msg:"Blogs has been updated", updated })
    } catch (error) {
        console.log("error:updateBlog")

        res.status(400).send({ msg: error.message })
    }
}

//delete any blogs 
// for moderator 
const deleteBlog = async (req,res) =>{
    const { id } = req.params
   try {
      const Deleted =  await Blogs.findByIdAndDelete(id)
       res.status(200).send({msg:"Blogs has been updated", Deleted })
   } catch (error) {
       console.log("error:deleteBlog")

       res.status(400).send({ msg: error.message })
   }
}

const updateBlogUser = async (req,res) =>{
     const { id } = req.params
     const payload = req.body
    try {
       const updated =  await Blogs.findByIdAndUpdate({id,userId:req.userId},payload)
        res.status(200).send({msg:"Blogs has been updated", updated })
    } catch (error) {
        console.log("error:updateBlog")

        res.status(400).send({ msg: error.message })
    }
}

//delete any blogs 
const DeleteBlogUser = async (req,res) =>{
    const { id } = req.params
   try {
      const Deleted =  await Blogs.findByIdAndDelete({id,userId:req.userId})
       res.status(200).send({msg:"Blogs has been updated", Deleted })
   } catch (error) {
       console.log("error:updateBlog")

       res.status(400).send({ msg: error.message })
   }
}
module.exports={
CreateBlogs,
getBlogs,
myblogs,
getOneBlog,
updateBlog,
updateBlogUser,
deleteBlog,
DeleteBlogUser
}