import mongoose from "mongoose";
const RolSchema = new mongoose.Schema({
    name: String
})
export default mongoose.model('rol', RolSchema)