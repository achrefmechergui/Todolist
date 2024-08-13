const todomodel = require('../models/todomodel.js')



exports.gettodocontroller =(req,res)=>{
    todomodel.gettodomodel().then((result)=>{
        res.send(result)
    })

}

exports.savetodocontroller = (req,res)=>{
    const task = req.body.text
    todomodel.savetodomodel(task).then((result)=>{
        res.send(result)
    })
}


exports.deletetodocontroller = (req,res)=>{
    const id = req.params.id
    todomodel.deletetodomodel(id).then((result)=>{
        res.send(result)
    })

}


exports.updatetodocontroller = (req,res)=>{
    const id = req.params.id
    const newtask = req.body.newtask
    todomodel.updatetodomodel(id,newtask).then((result)=>{
        res.send(result)
    })

}