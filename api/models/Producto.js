import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,"name required"]
    },
    price:{
        type:Number,
        required: [true,"price required"]
    },
    image: {
        type:String,
        default: "http://placehold.jp/150x150.png"
    },
    disable:{
        type:mongoose.Schema.Types.Boolean,
        default:true
    },
    description:{
        type:String,
        required: [true,"description required"]
    },
    header:{
        type:String,
        required: [true,"header required"]
    },
    folio:{
        type:String,
        required: [true,"folio required"],
        unique: true
    }
})

export default mongoose.model("Producto",productosSchema)