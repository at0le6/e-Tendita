import Cupon from '../models/Cupon.js'
import find from '../lib/Finds.js'
const createCupon=async(req,res)=>{
    try {
        let content=req.body
        console.log(typeof content.percentage!=="undefined"&&typeof content.cantidadDesc!=="undefined")
        if(typeof content.percentage!=="undefined"&&typeof content.cantidadDesc!=="undefined")return res.status(400).send("No puede mandar percentage y cantidad")
        const name=await find.findOneCupon({easyName:{$in:content.easyName}})
        if(name)return res.status(401).send(`Name ${content.easyName} alredy exist`)
        const unique=[...new Set(content.folio)]
        for(let i=0;i<unique.length;i++)
        {
            const folio=await find.findOneProductos({folio:unique[i]})
            if(!folio)return res.status(404).send(`Folio ${unique[i]} no existe`)
        }
        content.folio=unique
        const created=await Cupon.create(content)
        if(!created)return res.status(401).send("No se pudo crear el cupon")
        return res.status(201).json(created)
    } catch (error) {
        return res.status(500).send(error)
    }
}
const allCupon=async(req,res)=>{
    try {
        const content=req.body
        let query={}
        Object.entries(content).forEach(e=>query[e[0]]=e[1])
        const allCupon=await Cupon.find(query,"-__v ")
        if(!allCupon)throw "no se puedo obtener los datos"
        return res.status(200).json({data:allCupon})
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)  
    }  
}
const updateCupon=async(req,res)=>{
    try {
        const {id}=req.params
        console.log(req.body)
        const producto= await Cupon.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        })
        if(!producto) return res.status(404).send(`Cupon ${id} not found`)  
        res.sendStatus(202);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error) 
    } 
}
const deleteCupon=async(req,res)=>{
    try {
        const todelete=await Cupon.findByIdAndDelete(req.params.id)
        if(!todelete)return res.status(404).send("USer not found")
        return res.status(202).send("Succesfuly deleted")
    } catch (error) {
        return res.status(500).send(error)    
    }
}
export {createCupon,allCupon,updateCupon,deleteCupon}