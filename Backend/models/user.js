const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First name must be at least 3 characters"]
        },
        lastname:{
            type:String,
            minlength:[3,"last name must be at least 3 characters"]
           }
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false    //this will not be selected by default when we query the user
    },
    socketId:{
        type:String,
    }
});


//now we create some methods for the user schema
userSchema.methods.genetateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"24h"});
    return token;
}

userSchema.methods.comparePassword = async function(password){
    const isMatch = await bcrypt.compare(password,this.password);
    return isMatch;
}

userSchema.statics.hashPassword = async function(password){
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password,salt);
    // return hashedPassword;

    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;