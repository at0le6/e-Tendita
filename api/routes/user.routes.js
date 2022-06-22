import express from 'express'
import * as User from '../controllers/user.controller.js'

const router= express.Router()

//login and sign up
router.post("/signUp",User.createUser)
router.get("/logIn",User.sigIn)

//administrator uses
router.route("/User")
    .post(User.UserByID)
    .patch(User.updateUser)
    .delete(User.deleteUser)
router.get("/User",User.allUser)
export default router