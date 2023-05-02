const express = require("express")
const app = express()
const cookieParser=require("cookie-parser")
require("dotenv").config()
const {connection} = require("./db.js")
const {UserRouter} = require("./routes/user.routes.js")
const {BlogRouter} = require("./routes/blogs.routes.js")
const {auth} = require("./middleware/auth.middleware.js")

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("OK")
})

app.use("/user",UserRouter)
app.use(auth)
app.use("/blogs" , BlogRouter)

///listining
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Server is connected with mongodb")
    } catch (error) {
        console.log("Server is not connected with mongodb")
    }
    console.log(`listening on port : ${process.env.port}`)
})