// sign up and login user
import * as Mongoose from 'mongoose'

interface IUser extends Mongoose.Document {
    username: string
    email: string
    password: string
}

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
})

const UserModel = Mongoose.model<IUser>('User', UserSchema)

module.exports = UserModel
