
import { Router } from "express";
import { validate } from "../../middleware/validate.js";
import { verifyToken } from './../../middleware/verifyToken.js';
import { addTask, deleteTask, getAllTasks, getPublicTasks, getUserTasks, updateTask } from "./task.controller.js";// getPublicTasks, getUserTasks
import { addTaskVal, deleteTaskVal, getAllTasksVal, updateTaskVal } from "./task.validation.js";
import { getCategoryId } from "../../middleware/getCategoryId.js";



const taskRouter = Router();

taskRouter.post('/', verifyToken, validate(addTaskVal), getCategoryId, addTask);
taskRouter.get('/', getAllTasks);
taskRouter.get('/', getPublicTasks);
taskRouter.get('/me', verifyToken, getUserTasks);
taskRouter.put('/:id', verifyToken, validate(updateTaskVal), getCategoryId, updateTask);
taskRouter.delete('/:id', verifyToken, validate(deleteTaskVal), deleteTask);


export default taskRouter;




