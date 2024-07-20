import Joi from "joi"



const addCategoryVal = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(2).max(100).required(),
});

const updateCategoryVal = Joi.object({
    name: Joi.string().min(2).max(50),
    description: Joi.string().min(2).max(100),
    id: Joi.string().hex().length(24).required()
});

const deleteCategoryVal = Joi.object({
    id: Joi.string().hex().length(24).required()
});




export {
    addCategoryVal,
    updateCategoryVal,
    deleteCategoryVal
}