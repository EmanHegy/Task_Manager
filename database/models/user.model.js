import { Schema, model } from "mongoose";


export const userSchema = new Schema({
    userName: String,
    email: String,
    password: String,
}, {
    versionKey: false
})


export const User = model('User', userSchema);