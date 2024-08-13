const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

require('dotenv').config()

const todorouter = require('./routes/todoroutes.js')
const modifroutes = require('./routes/modifroutes.js')


/// middelweares ::
app.use(express.json())
app.use(cors())


const port = process.env.PORT

const url = process.env.Mongodb

mongoose.connect(`${url}`).then(()=>{
    console.log("database connected !!!")
}) 
.catch((err)=>
console.log(err))


//// routes : 
app.use('/',todorouter)
app.use('/',modifroutes)






app.listen({port},()=>{
    console.log(`server is lestning on port : ${port}`)
})