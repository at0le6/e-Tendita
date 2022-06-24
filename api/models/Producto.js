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
        default:false
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
        type:Number,
        required: [true,"folio required"],
        unique: true
    },
    tags:{
        type:Array,
        of:mongoose.Schema.Types.ObjectId,
        default:[]
    },
    useStock: {
        type:mongoose.Schema.Types.Boolean,
        required: [true,"header useStock"]
    },
    stock:Number,
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true 
    }
})

export default mongoose.model("Producto",productosSchema)