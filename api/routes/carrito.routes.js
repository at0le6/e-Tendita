import express from 'express'
import * as Carrito from '../controllers/carrito.controller.js'

const router= express.Router()

router.route("/carrito")
    .get(Carrito.yallCarrito)
    .post(Carrito.createCarrito)
router.route("/carrito/:id")
    .get(Carrito.allCarrito)
    .patch(Carrito.updateCarrito)
    .delete(Carrito.deleteCarrito)

export default router