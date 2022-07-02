import express from 'express'
import * as Carrito from '../controllers/carrito.controller.js'
import {auth} from '../middlewares/index.js'

const router= express.Router()

router.route("/carrito")
    .get(auth.verifyToken,auth.isAdmin,Carrito.yallCarrito)
    .post(auth.verifyToken,Carrito.createCarrito)
router.route("/carrito/:id")
    .get(auth.verifyToken,Carrito.allCarrito)
    .patch(auth.verifyToken,Carrito.updateCarrito)
    .delete(auth.verifyToken,Carrito.deleteCarrito)

export default router