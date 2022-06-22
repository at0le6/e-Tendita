import express from 'express'
import * as Cupon from '../controllers/cupon.controller.js'

const router= express.Router()

router.route("/cupon")
    .get(Cupon.allCupon)
    .post(Cupon.createCupon)
router.route("/cupon/:id")
    .get(Cupon.CuponByID)
    .patch(Cupon.updateCupon)
    .delete(Cupon.deleteCupon)

export default router