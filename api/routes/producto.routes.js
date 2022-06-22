import express from 'express'
import * as Producto from '../controllers/producto.controller.js'

const router= express.Router()

router.route("/producto")
    .get(Producto.allProducto)
    .post(Producto.createProducto)
router.route("/producto/:id")
    .get(Producto.productoByID)
    .patch(Producto.updateProducto)
    .delete(Producto.deleteProducto)
router.post("/historial",Producto.Historial)
router.post("/actual",Producto.Current)

export default router