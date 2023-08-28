const Todo = require('../models/todoModel')


exports.createTodo = async (req,res) => {
    try{    

        const { title, desc } = req.body 

        const user = req.user._id ;

        const todo = await Todo.create({
            title,
            desc,
            user
        })


        res.status(200).json({
            success: true,
            message: "Todo Created",
            todo
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


exports.myTodos = async (req,res) => {
    try{

        const user = req.user._id ;

        const todos = await Todo.find({user}) ;

        res.status(200).json({
            success: true,
            todos            
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


exports.editTodo = async (req,res) => {
    try{

        const todo = await Todo.findById(req.params.id) ;

        if(!todo){
            return res.status(400).json({
                success: false,
                message: "Todo not found"
            })
        }

        todo.title = req.body.newTitle ;
        todo.desc = req.body.newDesc ;

        await todo.save() ;      

        res.status(200).json({
            success: true,
            message: "Todo Edited",
            todo
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


exports.deleteTodo = async (req,res) => {
    try{

        const todo = await Todo.findByIdAndRemove(req.params.id) ;    
        
        if(!todo){
            return res.status(400).json({
                success: false,
                message: "Todo not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Todo Deleted",
            todo
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}