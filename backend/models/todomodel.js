const { text } = require('express')
const mongoose = require('mongoose')



const todoschema = mongoose.Schema({
    text : {
        type : String,
        required : true
    }
})


const todomodel = mongoose.model("todo",todoschema)

//// get all the tasks :
exports.gettodomodel = async ()=>{
    try {
        const todo = await todomodel.find()
        return todo

    } 

    catch(err){
        console.log(err)
    }
    
}

/// insert new task : 

exports.savetodomodel = async (task)=>{
    try {
        const todo = await todomodel.insertMany({text:task})
        

    } catch (err){
        console.log(err)
        
    }


}

//// delete specific task by id :

exports.deletetodomodel  =async (id)=>{
    try {
        const todo = await todomodel.deleteOne({_id:id})
        console.log("book was deleted !! ", todo)


    } catch(err){
        console.log(err)

    }

}


/// update a specific task by id : 
exports.updatetodomodel = async (id,newtask)=>{
    try {
        const todo  = await todomodel.updateOne({_id:id},{text:newtask})
        console.log("task was modified successfully !!!" , todo)

    } catch (err){
        console.log(err)
    }
}


