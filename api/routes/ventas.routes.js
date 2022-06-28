import express from 'express'
import * as venta from '../controllers/ventas.controller.js'

const router= express.Router()

router.post('/checkout',venta.checkout)
export default router