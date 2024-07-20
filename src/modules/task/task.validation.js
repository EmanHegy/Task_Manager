import Joi from "joi";


const addTaskVal = Joi.object({
    title: Joi.string().min(2).max(50).required(),
    taskBody: Joi.alternatives().try(
        Joi.string().min(2).max(200),
        Joi.array().items(Joi.string())
    ).required(),
    categoryName: Joi.string().min(2).max(50).required(),
    shared: Joi.string().valid("public", "private").required()
})

const updateTaskVal = Joi.object({
    title: Joi.string().min(2).max(50),
    taskBody: Joi.alternatives().try(
        Joi.string().min(2).max(200),
        Joi.array().items(Joi.string())
    ),
    shared: Joi.string().valid("public", "private"),
    categoryName: Joi.string().min(2).max(50).required(),
    id: Joi.string().hex().length(24).required()
})

const deleteTaskVal = Joi.object({
    id: Joi.string().hex().length(24).required()
})

export {
    addTaskVal,
    updateTaskVal,
    deleteTaskVal
}