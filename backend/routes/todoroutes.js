const express = require('express')
const todocontroller = require ('../controllers/todocontroller.js')

const todorouter = express.Router()
const body = express.urlencoded({extended:true})





todorouter.get('/get-todo',todocontroller.gettodocontroller)
todorouter.post('/post-todo',body,todocontroller.savetodocontroller)




module.exports = todorouter