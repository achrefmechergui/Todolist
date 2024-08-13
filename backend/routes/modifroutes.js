const express = require('express')

const modifroutes = express.Router()
const todocontroller = require('../controllers/todocontroller.js')
const body = express.urlencoded({extended:true})




modifroutes.delete ('/delete/:id',todocontroller.deletetodocontroller)
modifroutes.patch('/update/:id',body,todocontroller.updatetodocontroller)


module.exports = modifroutes