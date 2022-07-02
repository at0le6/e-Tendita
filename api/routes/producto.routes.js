import express from 'express'
import * as Producto from '../controllers/producto.controller.js'
import {auth} from '../middlewares/index.js'

const router= express.Router()

router.post("/producto",auth.verifyToken,auth.isAdmin,Producto.createProducto)
router.post("/producto/filter",Producto.allProducto)
router.route("/producto/:id")
    .patch(auth.verifyToken,auth.isAdmin,Producto.updateProducto)
    .delete(auth.verifyToken,auth.isAdmin,Producto.deleteProducto)

router.post("/historial",auth.verifyToken,Producto.Historial)
router.post("/actual",Producto.Current)

export default router