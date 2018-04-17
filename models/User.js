const bcrypt = require("bcrypt-nodejs")
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        index: {unique: true}
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    owner:{
        type: Boolean,
        default: false
    }
})

userSchema.pre('save', (next) =>{
    const user=this;
    if(!user.isModified('passowrd')){
        return next()
    }
    bcrypt.genSalt (10, (err,salt)=>{
        if(err)return next(err)

        bcrypt.hash(user.password, salt, (err,hash)=>{
            if(err) return next(err);
            user.password=hash;
            next();
        })
    })
    
});
userSchema.methods.validatePassword = (cadidatePassword)=>{
    return new Promise ((resolve, rejet)=>{
        bcrypt.compare(cadidatePassword, this.password, (err,isMatch)=>{
            if (err) return reject(err);
            resolve(isMatch)
        })
    })
}

const User = mongoose.model("User", userSchema)
module.exports = User