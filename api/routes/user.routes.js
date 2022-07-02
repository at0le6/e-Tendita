import express from 'express'
import * as User from '../controllers/user.controller.js'
import {auth} from '../middlewares/index.js'

const router= express.Router()

//login and sign up
router.post("/signUp",User.createUser)
router.post("/logIn",User.sigIn)

//administrator uses
router.route("/User")
    .post(auth.verifyToken,auth.isAdmin,User.allUser)
    .patch(auth.verifyToken,auth.isAdmin,User.updateUserAdmin)
export default router