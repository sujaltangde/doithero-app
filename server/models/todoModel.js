const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    title:{
        type: String,
        required: [true,"Please Enter title"],

    },
    desc:{
        type: String,
        required: [true, "Please Enter Description"]
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

const Todo = mongoose.model("Todo",todoSchema)
module.exports = Todo