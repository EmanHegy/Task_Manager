import { Category } from '../../../database/models/category.model.js';
import { ApiFeatures } from '../../utils/apiFeatures.js';
import { AppError } from '../../utils/appError.js';
import { catchError } from './../../middleware/catchError.js';


const addCategory = catchError(async (req, res, next) => {
    req.body.userId = req.user.userId;
    const category = await Category.insertMany(req.body);
    res.status(201).json({ message: "Category added successfully", category });
});


const getAllCategories = catchError(async (req, res) => {
    let apifeatures = new ApiFeatures(Category.find(), req.query).pagination().sort(); //
    let categories = await apifeatures.mongooseQuery;
    res.json({ message: "Sucess", page: apifeatures.pageNumber, categories })
});

const getUserCategories = catchError(async (req, res, next) => {
    let apifeatures = new ApiFeatures(Category.find({ userId: req.user.userId }), req.query).pagination().sort(); //
    let categories = await apifeatures.mongooseQuery;
    res.json({ message: "Sucess", page: apifeatures.pageNumber, categories })
});


const updateCategory = catchError(async (req, res, next) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return next(new AppError("Category not found", 404));

    res.status(200).json({ message: "Category updated successfully", category });
});
const deleteCategory = catchError(async (req, res, next) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return next(new AppError("Category not found", 404));

    res.status(200).json({ message: "Category deleted successfully", category })
});


export {
    addCategory,
    getAllCategories,
    getUserCategories,
    updateCategory,
    deleteCategory
}