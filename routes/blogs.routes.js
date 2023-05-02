const { CreateBlogs,getBlogs, myblogs, getOneBlog,updateBlog,updateBlogUser, deleteBlog,DeleteBlogUser} = require("../controller/blogs.controller")

const {authorize} =require("../middleware/authorization.middleware")

const BlogRouter = require("express").Router()

BlogRouter.post("/create",CreateBlogs)
BlogRouter.get("/myblogs",myblogs)
BlogRouter.get("/allblogs",authorize,getBlogs)
BlogRouter.get("/:id",getOneBlog)
BlogRouter.patch("/:id",authorize,updateBlog)
BlogRouter.delete("/:id",authorize,deleteBlog)
BlogRouter.patch("user/:id",updateBlogUser)
BlogRouter.delete("user/:id",DeleteBlogUser)

module.exports={BlogRouter}
