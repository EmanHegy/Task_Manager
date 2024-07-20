
import mongoose, { Schema, model } from 'mongoose';

const taskSchema = new Schema({

    title: String,
    taskBody: Schema.Types.Mixed,
    shared: {
        type: String,
        enum: ['public', 'private']
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    versionKey: false
})


export const Task = model('Task', taskSchema)