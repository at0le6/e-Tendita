import express from 'express'
import * as Cupon from '../controllers/cupon.controller.js'

const router= express.Router()

router.post("/cupon",Cupon.createCupon)
router.post("/cupon/filter",Cupon.allCupon)
router.route("/cupon/:id")
    .patch(Cupon.updateCupon)
    .delete(Cupon.deleteCupon)

export default router