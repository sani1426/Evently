import { Schema, model, models } from "mongoose";



const UserSchema = new Schema({
    email : {type : String , required: true, unique: true},
    firstname : {type : String , required: true},
    username : {type: String ,required: true, unique: true },
    lastname : {type :String ,required: true},
    password : {type : Number , required: true }
})

const User = models.User || model('User' , UserSchema);
export default User