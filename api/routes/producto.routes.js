import express from 'express'
import * as Producto from '../controllers/producto.controller.js'

const router= express.Router()

router.post("/producto",Producto.createProducto)
router.post("/producto/filter",Producto.allProducto)
router.route("/producto/:id")
    .patch(Producto.updateProducto)
    .delete(Producto.deleteProducto)
router.post("/historial",Producto.Historial)
router.post("/actual",Producto.Current)

export default router