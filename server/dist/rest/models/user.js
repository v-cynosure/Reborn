"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sign up and login user
const Mongoose = require("mongoose");
const UserSchema = new Mongoose.Schema({
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
});
const UserModel = Mongoose.model('User', UserSchema);
exports.default = UserModel;
