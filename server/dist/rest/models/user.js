"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sign up and login user
const Mongoose = require("mongoose");
// interface IUser extends Mongoose.Document {
//     username: string
//     email: string
//     password: string
// }
const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    cName: {
        type: String,
    },
    eName: {
        type: String,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
    },
    isUpdated: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
const UserModel = Mongoose.model('User', UserSchema);
module.exports = UserModel;
