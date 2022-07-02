import mongoose from "mongoose";
const carritoSchema = new mongoose.Schema({
    products: [{
        type:Number
        ,required:true
    }]
})
export default mongoose.model('carrito', carritoSchema)