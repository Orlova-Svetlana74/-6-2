const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minLength:2
    },
    username: {
        type: String,
        required:true,
        minLength:2
    },
    email: {
        type: String,
        required:true,
        minLength:2 
    }
});
module.exports = mongoose.modele ('user', UserSchema)