
import Categories from "../models/Categories.js";

export const creatBases = async() => {
    try {
        const count1 = await Categories.find().estimatedDocumentCount();
        if (count1 > 0) {
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