const {createTodo, myTodos, editTodo, deleteTodo} = require('../controllers/TodoControls') ;
const {isAuthenticated} = require('../middleware/auth') ;

const express = require('express')

const router = express.Router()


router.route("/create").post(isAuthenticated,createTodo) ;

router.route("/myTodos").get(isAuthenticated,myTodos) ;

router.route("/editTodo/:id").put(isAuthenticated,editTodo) ;

router.route("/deleteTodo/:id").delete(isAuthenticated,deleteTodo) ;

module.exports = router