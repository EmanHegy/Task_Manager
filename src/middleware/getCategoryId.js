import { Category } from "../../database/models/category.model.js";
import { AppError } from "../utils/appError.js";

export const getCategoryId = async (req, res, next) => {
    // req.body.categoryName
    let category = await Category.findOne({ name: req.body.categoryName || req.query.categoryName, userId: req.user.userId })
    if (!category) return next(new AppError("Category not found", 404));
    req.categoryId = category._id;
    return next()
}