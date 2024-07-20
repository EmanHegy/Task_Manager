import mongoose, { Schema, model } from "mongoose";


export const categorySchema = new Schema({
    name: String,
    description: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    versionKey: false
})


export const Category = model('Category', categorySchema);