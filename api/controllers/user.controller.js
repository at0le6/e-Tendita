const createUser=async(req,res)=>{
    return res.status(200).send("test ok createUser")
}
const sigIn=async(req,res)=>{
    return res.status(200).send("test ok sigIn")
}
//Admin controllers
const allUser=async(req,res)=>{
    return res.status(200).send("test ok allUser")    
}
const UserByID=async(req,res)=>{
    return res.status(200).send("test ok UserByID")    
}
const updateUser=async(req,res)=>{
    return res.status(200).send("test ok updateUser")    
}
const deleteUser=async(req,res)=>{
    return res.status(200).send("test ok deleteUser")    
}
export {createUser,allUser,UserByID,updateUser,deleteUser,sigIn}