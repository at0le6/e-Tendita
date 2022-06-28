import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AdressSchema=mongoose.Schema({
    calle:String,
    delegacion:String,
    postal:Number,
    entreCalles:String,
    ciudad:String
},{ _id : false })
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
    rol: [{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"rol"
    }]
})
UserSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(Number(process.env.SALTSJWT));
    return await bcrypt.hash(password, salt);
}
UserSchema.statics.comparePassword = async(password, recivePassword) => {
    return await bcrypt.compare(password, recivePassword)
}
export default mongoose.model('user', UserSchema)