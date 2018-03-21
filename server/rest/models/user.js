// sign up and login user
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
