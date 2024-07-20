import { Router } from "express";
import { validate } from "../../middleware/validate.js";
import { verifyToken } from './../../middleware/verifyToken.js';
import { addCategory, deleteCategory, getAllCategories, getUserCategories, updateCategory } from "./category.controller.js";
import { addCategoryVal, deleteCategoryVal, updateCategoryVal } from "./category.validation.js";



const categoryRouter = Router();

categoryRouter.post('/', verifyToken, validate(addCategoryVal), addCategory);
categoryRouter.get('/', getAllCategories);
categoryRouter.get('/me', verifyToken, getUserCategories);
categoryRouter.put('/:id', verifyToken, validate(updateCategoryVal), updateCategory);
categoryRouter.delete('/:id', verifyToken, validate(deleteCategoryVal), deleteCategory);
// categoryRouter.getPublic('/', );


export default categoryRouter;




