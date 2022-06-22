const createCupon=async(req,res)=>{
    return res.status(200).send("test ok createCupon")
}
const allCupon=async(req,res)=>{
    return res.status(200).send("test ok allCupon")    
}
const CuponByID=async(req,res)=>{
    return res.status(200).send("test ok CuponByID")    
}
const updateCupon=async(req,res)=>{
    return res.status(200).send("test ok updateCupon")    
}
const deleteCupon=async(req,res)=>{
    return res.status(200).send("test ok deleteCupon")    
}
export {createCupon,allCupon,CuponByID,updateCupon,deleteCupon}