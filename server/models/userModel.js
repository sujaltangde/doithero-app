const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,"Please Enter your name"],
        maxLength:[30, "Name cannot exceed 30 charecters"],
        minLenght: [4,"Name should have more than 4 charecters"],
    },
    email:{
        type:String,
        require: true,
        unique: true,
        validate:[validator.isEmail,"Please Enter valid email address"]
    },
    password:{
        type: String,
        require: [true,"Please Enter a password"]
    }
    
})

const User = mongoose.model("User",userSchema)
module.exports = User