import express from 'express'
import * as User from '../controllers/user.controller.js'

const router= express.Router()

//login and sign up
router.post("/signUp",User.createUser)
router.post("/logIn",User.sigIn)

//administrator uses
router.route("/User")
    .get(User.allUser)
    .patch(User.updateUser)
export default router