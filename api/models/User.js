import mongoose from "mongoose";

const AdressSchema=mongoose.Schema({
    calle:String,
    delegacion:String,
    postal:Number,
    entreCalles:String,
    ciudad:String
})
const validateEmail = (email)=>{
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}
const UserSchema = new mongoose.Schema({
    userName: {
        type:String,
        unique:true,
        required:true
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    direction:AdressSchema,
    rol: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"rol"
    }
})
export default mongoose.model('user', UserSchema)