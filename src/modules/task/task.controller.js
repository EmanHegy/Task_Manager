
import { Task } from '../../../database/models/task.model.js';
import { ApiFeatures } from '../../utils/apiFeatures.js';
import { AppError } from '../../utils/appError.js';
import { catchError } from './../../middleware/catchError.js';


const addTask = catchError(async (req, res, next) => {
    req.body.userId = req.user.userId;
    req.body.categoryId = req.category._id;

    const task = await Task.insertMany(req.body);
    res.status(201).json({ message: "Task added successfully", task });
});




const getAllTasks = catchError(async (req, res, next) => {
    let apifeatures = new ApiFeatures(Task.find().populate('categoryId').populate('userId'), req.query).pagination().sort(); //
    let tasks = await apifeatures.mongooseQuery;
    res.json({ message: "Sucess", page: apifeatures.pageNumber, tasks })
})
const getPublicTasks = catchError(async (req, res, next) => {
    let apifeatures = new ApiFeatures(Task.find({ shared: "public" }).populate('categoryId').populate('userId'), req.query).pagination().sort(); //
    let tasks = await apifeatures.mongooseQuery;
    res.json({ message: "Sucess", page: apifeatures.pageNumber, tasks })
})

const getUserTasks = catchError(async (req, res, next) => {
    let apifeatures = new ApiFeatures(Task.find({ userId: req.user.userId }).populate('categoryId').populate('userId'), req.query).pagination().sort(); //
    let tasks = await apifeatures.mongooseQuery;
    res.json({ message: "Sucess", page: apifeatures.pageNumber, tasks })
});


const updateTask = catchError(async (req, res, next) => {
    req.body.userId = req.user.userId;
    req.body.categoryId = req.categoryId;

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return next(new AppError("Task not found", 404));
    res.status(200).json({ message: "Task updated successfully", task });
});

const deleteTask = catchError(async (req, res, next) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return next(new AppError("Task not found", 404));
    res.status(200).json({ message: "Task deleted successfully", task })
});


export {
    addTask, deleteTask, getAllTasks,
    getPublicTasks,
    getUserTasks,
    updateTask
};


