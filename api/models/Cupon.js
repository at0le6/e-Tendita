import mongoose from "mongoose";
const CuponSchema = new mongoose.Schema({
    usos:{
        type:Number,
        required:true,
        default:5
    },
    percentage:{
        type:mongoose.Schema.Types.Decimal128,
        default:0.00
    },
    cantidadDesc:{
        type:Number,
        default:0
    },
    expire:{
        type:Date,
        required:true
    },
    folio:[{
        type:Number,
        required:true
    }],
    active:{
        type:mongoose.Schema.Types.Boolean,
        required:true,
        default:true
    },
    easyName:{
        type:String,
        required:true
    }
})
export default mongoose.model('cupon', CuponSchema)