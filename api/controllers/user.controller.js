import User from '../models/User.js'
import Role from '../models/Rol.js'
import jwt from "jsonwebtoken";

const createUser=async(req,res)=>{
    try {
        const {password,rol,...content}=req.body
        const newUser = new User({
            ...content,
            password: await User.encryptPassword(password)
        })
        if(rol)
        {
            const foundRoles = await Role.find({ name: { $in: rol } })
            newUser.rol = foundRoles.map(e => e._id);
        }
        else
        {
            const role = await Role.findOne({ name: "user" });
            newUser.roles = [role._id];
        }
        const user = await User.create(newUser);
        const token = jwt.sign({ id: user._id }, process.env.SECRETtJWT, { expiresIn: 86400 })
        return res.status(200).json({token})
    } catch (error) {
        return res.status(500).send(error)
    }
}
const sigIn=async(req,res)=>{
    try {
        const { email, password } = req.body;
        const userfound = await User.findOne({ email }).populate('rol');
        if (!userfound) {
            return res.status(404).json({ msg: "User found" })
        }
        const comparePassword = await User.comparePassword(password, userfound.password);
        if (!comparePassword) {
            return res.status(401).json({ msg: "Invalid password" })
        }
        const token = jwt.sign({ id: userfound._id }, process.env.SECRETtJWT, { expiresIn: 86400 })
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    }
}
//Admin controllers
const allUser=async(req,res)=>{
    try {
        const users=await User.find({},"-password -__v")
        return res.status(200).json({users})
    } catch (error) {
        return res.status(500).send(error)   
    } 
}
const updateUserAdmin=async(req,res)=>{
    try {
        const { roles, id } = req.body
        const findUser = await User.findById(id);
        if (!findUser) {
            return res.status(404).json({ msg: "User found" })
        }
        const updated = await Role.find({ name: { $in: roles } })
        const changeRoles = await User.findByIdAndUpdate(id, { rol: updated }, { new: true, runValidators: true })
        res.status(200).json({ changeRoles });
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    } 
}
const updateUser=async(req,res)=>{
    try {
        delete req.body.rol
        const {id,...content} = req.body
        const findUser = await User.findByIdAndUpdate(id,{content},{
            new:true,
            runValidators:true
        });
        if (!findUser) {
            return res.status(404).json({ msg: "User found" })
        }
        res.sendStatus(202);
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong" })
    } 
}
export {createUser,allUser,updateUserAdmin,sigIn,updateUser}