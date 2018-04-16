const bcrypt = require("bcrypt-nodejs")
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique: true
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

User.plugin(passportLocalMongoose);
User.prototype.validPassword= function(password){
    return bcrypt.compareSync(password, this.password)
}
User.hook("beforeCreate", user=>{
    user.password= bcrypt.hashSync(user.password,bcrypt.genSalt(10), null)
});

const User = mongoose.modlel("User", userSchema)
module.exports = User