import productosSchema from '../models/Producto.js';
import InventarioSchema from '../models/Inventario.js';
import Categories from '../models/Categories.js';
import find from '../lib/Finds.js'

const createProducto=async(req,res)=>{
    try {
        const content=req.body
        const generatedFolio=await productosSchema.find().estimatedDocumentCount() +1
        let jsonProducto={
                 name:content.name,price:content.price,description:content.description
                 ,header:content.header,folio:generatedFolio
            }
            //condicionales del objeto
            if(typeof content.image!=="undefined")jsonProducto.image=content.image
            if(typeof content.disable!=="undefined")jsonProducto.disable=content.disable
        const dataProducto=await productosSchema.create(jsonProducto)
            //condicionales del objeto
            if(Object.keys(dataProducto).length==0)throw "productos no se pudo insertar"
        const categoryID= await Categories.findOne({name:content.category}).orFail()
        const jsonInventario={
             item:dataProducto._id,useStock:content.useStock
             ,category:categoryID._id
            }
            //condicionales del objeto
            if(content.useStock && typeof content.stock!=="undefined")jsonInventario.stock=content.stock
            else if(typeof content.stock==="undefined"&&content.useStock) throw "favor de enviar stock"
            else if(!content.useStock)jsonInventario.stock=0
        const dataInventario=await InventarioSchema.create(jsonInventario)
            if(Object.keys(dataInventario).length==0)throw "productos no se pudo insertar"
        return res.status(201).json({folio:dataProducto.folio})
    } catch (error) {
        return res.status(500).json(error)
    }
}
const allProducto=async(req,res)=>{
    try {
        let allProducts= await productosSchema.find({},'-__v').lean()
        for (let index = 0; index < allProducts.length; index++) {
            let Inventory=await find.findOneInventario({item:allProducts[index]._id})
            delete allProducts[index]._id
            if(!Inventory){
                console.log("pasando por aqui")
                allProducts[index].errorInventario=true
                continue;
            }
            if(Inventory.useStock)allProducts[index].stock=Inventory.stock
            //allProducts.category=Inventory.Categorias.name
        }
        return res.status(200).json({Products:allProducts})
    } catch (error) {
        return res.status(500).json({error:error}) 
    } 
}
const productoByID=async(req,res)=>{
    return res.status(200).send("test ok productoByID")    
}
const updateProducto=async(req,res)=>{
    return res.status(200).send("test ok updateProducto")    
}
const deleteProducto=async(req,res)=>{
    try {
        const deleteProducto=await productosSchema.findOneAndDelete({folio:req.params["id"]})
        console.log(deleteProducto)
        if(Object.keys(deleteProducto).length==0)throw "producto no pudo ser eliminado"
        const deleteInventario=await InventarioSchema.findOneAndDelete({item:deleteProducto._id})
        console.log(deleteInventario)
        if(Object.keys(deleteInventario).length==0)throw "Inventario del producto no pudo ser eliminado"
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json(error)     
    }  
}
const Historial=async(req,res)=>{
    return res.status(200).send("test ok Historial")
}
const Current=async(req,res)=>{
    return res.status(200).send("test ok Actuales en curso")
}
export {createProducto,allProducto,productoByID,updateProducto,deleteProducto,Historial,Current}