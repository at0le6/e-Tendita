import express from 'express'
import * as Cupon from '../controllers/cupon.controller.js'
import {auth} from '../middlewares/index.js'

const router= express.Router()

router.post("/cupon",auth.verifyToken,auth.isAdmin, Cupon.createCupon)
router.post("/cupon/filter",auth.verifyToken,auth.isAdmin,Cupon.allCupon)
router.route("/cupon/:id")
    .patch(auth.verifyToken,auth.isAdmin,Cupon.updateCupon)
    .delete(auth.verifyToken,auth.isAdmin,Cupon.deleteCupon)

export default router