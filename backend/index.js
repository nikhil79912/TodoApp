const express=require("express")
const mongoose=require("mongoose")
require('dotenv').config()
const routes=require("./routes/ToDoRoute")
const cors =require("cors")

const app=express()
const PORT=process.env.port || 5000
app.use(express.json())
app.use(cors())



mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`MongodB is Connected`))
.catch((err)=>console.log(err))

app.use(routes)

app.listen(PORT,()=>console.log(`Listening on:${PORT}`))