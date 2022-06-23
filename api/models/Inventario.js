import mongoose from "mongoose";

const InventarioSchema = new mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true 
    },
    stock:Number,
    useStock:{
        type:mongoose.Schema.Types.Boolean,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Categorias',
        required: true 
    }
})

export default mongoose.model("Inventario",InventarioSchema)