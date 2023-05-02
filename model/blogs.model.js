const mongoose=require("mongoose")

const blogsSchema=mongoose.Schema({
  title:{type:String,required:true},
  description:{type:String, required:true},
  userId:{type:String,required:true} 
},
{timestamps: true}
)

const Blogs=mongoose.model("blog",blogsSchema)

module.exports = {Blogs} 