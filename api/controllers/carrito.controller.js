const createCarrito=async(req,res)=>{
    return res.status(200).send("test ok createCarrito")
}
const allCarrito=async(req,res)=>{
    return res.status(200).send("test ok allCarrito")    
}
const yallCarrito=async(req,res)=>{
    return res.status(200).send("test ok allCarrito")    
}
const CarritoByID=async(req,res)=>{
    return res.status(200).send("test ok CarritoByID")    
}
const updateCarrito=async(req,res)=>{
    return res.status(200).send("test ok updateCarrito")    
}
const deleteCarrito=async(req,res)=>{
    return res.status(200).send("test ok deleteCarrito")    
}
export {createCarrito,allCarrito,CarritoByID,updateCarrito,deleteCarrito,yallCarrito}