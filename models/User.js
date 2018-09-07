var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    message:String,
    name:String,
    email : String,
    company: String,
    mobile: Number,
    industry: String,
    attachment:String

}, {timestamp:true});
var userModel = mongoose.model('User', userSchema);
module.exports = userModel;