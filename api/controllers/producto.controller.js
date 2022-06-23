import productosSchema from '../models/Producto.js';
import InventarioSchema from '../models/Inventario.js';

const createProducto=async(req,res)=>{
    try {
        const content=req.body
        const exist=await productosSchema.findOne({folio:content.folio})
        if(exist=="null")return res.status(404).send("Folio ya dado de alta")
        const dataProducto=await productosSchema.save()
    } catch (error) {
        const validator=productoByID.validateSync();
        let ErrorContent=validator.errors.map(e=>e.message)
        if(ErrorContent) return res.status(500).json(ErrorContent)
        res.status(500).send(error)
    }
}
const allProducto=async(req,res)=>{
    return res.status(200).send("test ok allProducto")    
}
const productoByID=async(req,res)=>{
    return res.status(200).send("test ok productoByID")    
}
const updateProducto=async(req,res)=>{
    return res.status(200).send("test ok updateProducto")    
}
const deleteProducto=async(req,res)=>{
    return res.status(200).send("test ok deleteProducto")    
}

const Historial=async(req,res)=>{
    return res.status(200).send("test ok Historial")
}
const Current=async(req,res)=>{
    return res.status(200).send("test ok Actuales en curso")
}
export {createProducto,allProducto,productoByID,updateProducto,deleteProducto,Historial,Current}