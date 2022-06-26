
import Categories from "../models/Categories.js";
import Roles from '../models/Rol.js'
import Cupon from '../models/Cupon.js'

export const creatBases = async() => {
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
        const count1 = await Roles.find().estimatedDocumentCount();
        if (count1 > 0) {
            return
        }
        const loadRoles = await Promise.all([
            new Categories({ name: "Admin" }).save(),
            new Categories({ name: "User" }).save(),
        ])
    } catch (error) {
        console.log(error);
    }
}