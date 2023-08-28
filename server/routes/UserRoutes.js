const express = require('express')
const {registerUser, loginUser, isLogin} = require('../controllers/UserControls')
const {isAuthenticated} = require('../middleware/auth')

const router = express.Router() ;


router.route("/register").post(registerUser) ;

router.route("/loginUser").post(loginUser) ;

router.route("/isLogin").get(isAuthenticated,isLogin) ;


module.exports = router ;