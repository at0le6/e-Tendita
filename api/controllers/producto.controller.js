import productosSchema from '../models/Producto.js';
import find from '../lib/Finds.js'

const createProducto=async(req,res)=>{
    try {
        const content=req.body
        let generatedFolio
        const folio=await productosSchema.find().sort({ folio: -1 }).limit(1)
        if(folio.length==0)generatedFolio=1
        else generatedFolio=folio[0].folio+1
        let jsonProducto={
                 name:content.name,price:content.price,description:content.description
                 ,header:content.header,folio:generatedFolio,useStock:content.useStock
            }
            //condicionales del objeto
            if(typeof content.image!=="undefined")jsonProducto.image=content.image
            if(typeof content.disable!=="undefined")jsonProducto.disable=content.disable
        const categoryID= await find.findOneByIDCategories(content.category)
        if(!categoryID)return res.status(404).send(`category id not found`)
        jsonProducto.category=categoryID._id
            //condicionales del objeto
            if(content.useStock && typeof content.stock!=="undefined")jsonProducto.stock=content.stock
            else if(typeof content.stock==="undefined"&&content.useStock) throw "favor de enviar stock"
            else if(!content.useStock)jsonProducto.stock=0
        const insert=await productosSchema.create(jsonProducto)
        return res.status(201).json({folio:insert.folio})
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
const allProducto=async(req,res)=>{
    try {
        const {grater,seller,...content}=req.body
        let query={},sort={}
        Object.entries(content).forEach(e=>{
            if(e[0]=="price"){
                query[e[0]]={$gte:e[1][0],$lte:e[1][1]}
                console.log(query)
            }
            else query[e[0]]=e[1]
        })
        if(typeof grater!=="undefined")sort["price"]=grater?-1:1
        if(typeof seller!=="undefined")sort["ventas"]=seller?-1:1
        const allProducts= await productosSchema.find(query,"-__v -ventas").populate({path:"category",select:'name -_id'})
            .sort(sort)
        return res.status(200).json({data:allProducts})
    } catch (error) {
        console.log(error);
        return res.status(500).json({error}) 
    } 
}
const updateProducto=async(req,res)=>{
    try {
        delete req.body.ventas
        const {id}=req.params
        console.log(req.body)
        const producto= await productosSchema.findOneAndUpdate({folio:id},req.body,{
            new:true,
            runValidators:true
        })
        if(!producto) return res.status(404).send(`category id not found`)  
        res.sendStatus(202);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error) 
    } 
}
const deleteProducto=async(req,res)=>{
    try {
        const deleteProducto=await productosSchema.findOneAndDelete({folio:req.params["id"]})
        if(!deleteProducto)res.status(404).send("user not found")
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
export {createProducto,allProducto,updateProducto,deleteProducto,Historial,Current}