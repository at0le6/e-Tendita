import mongoose from "mongoose";

const InventarioSchema = new mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true 
    },
    stock:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Categorias',
        required: true 
    }
})

export default mongoose.model("Inventario",InventarioSchema)