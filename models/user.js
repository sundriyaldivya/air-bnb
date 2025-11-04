const { required } = require("joi");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const PasswordLocalMongoose = require("passport-local-mongoose")




const UserSchema = new Schema({
    email:{
        type :String,
        required:true
    }
})


UserSchema.plugin(PasswordLocalMongoose);
module.exports = mongoose.model('User',UserSchema);