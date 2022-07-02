import jws from 'jsonwebtoken'
import User from '../models/User.js'
import Role from '../models/Rol.js'
import Producto from '../models/Producto.js'

const verifyToken =async(req,res,next)=>{
    try {
        const token=req.headers["authorization"]
        if(!token)return res.status(401).json({ msg: "Not token provided" })
        const decoded= jws.verify(token,process.env.SECRETtJWT)
        req.userId = decoded.id
        const user = await User.findById(req.userId,"-password");
        if (!user) return res.status(404).json({ msg: "User not found" })
        next();
    } catch (error) {
        res.status(401).json({ msg: "Unauthorized" })
    }
}
const isAdmin = async(req, res, next) => {
    const user = await User.findById(req.userId);
    delete req.userId
    const roles = await Role.find({ _id: { $in: user.rol } })
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name == "Admin") {
            next();
            return
        }
    }
    return res.status(403).json({ msg: "Requier Admin role" })
}
export {isAdmin,verifyToken}