const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")
const bcryptN = require("bcrypt-nodejs")
// ... this is so dumb
// both of these are actually being used


const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        index: {unique: true}
    },
    email:{
        type:String,
        required: true,
        index: {unique: true}
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

userSchema.pre('save', function(next){
    const user=this;
    if(!user.isModified('password')){
        return next()
    }
    bcryptN.genSalt (10, function (err,salt) {
        if(err)return next(err)

        bcryptN.hash(user.password, salt, null, function (err,hash) {
            if(err) return next(err);
            user.password=hash;
            next();
        })
    })
    
});
userSchema.methods.validatePassword = function(candidatePassword){
    return new Promise ((resolve, reject)=>{
        bcrypt.compare(candidatePassword, this.password, (err,isMatch)=>{
            if (err) return reject(err);
            resolve(isMatch)
        })
    })
}

const User = mongoose.model("User", userSchema)
module.exports = User