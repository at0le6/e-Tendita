
import Categories from "../models/Categories.js";
import Roles from '../models/Rol.js'
import Cupon from '../models/Cupon.js'

export const creatCategorias = async() => {
    try {
        const count = await Categories.find().estimatedDocumentCount();
        if (count > 0) {
            return
        }
        const load = await Promise.all([
            new Categories({ name: "Pasteles" }).save(),
            new Categories({ name: "Galletas" }).save(),
            new Categories({ name: "Gelatinas" }).save(),
        ])
    } catch (error) {
        console.log(error);
    }
}
export const createRoles=async()=>{
    try {
        const count = await Roles.find().estimatedDocumentCount();
        if (count > 0) {
            return
        }
        const loadRoles = await Promise.all([
            new Roles({ name: "Admin" }).save(),
            new Roles({ name: "User" }).save(),
        ])
    } catch (error) {
        console.log(error);
    }
}