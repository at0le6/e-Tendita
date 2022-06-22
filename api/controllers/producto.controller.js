const createProducto=async(req,res)=>{
    return res.status(200).send("test ok createProducto")
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