import Joi from "joi";


const signupVal = Joi.object({
    userName: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-za-z0-9]{8,40}$/).required(),
    rePassword: Joi.valid(Joi.ref('password')).required()
});

const signinVal = Joi.object({
    userName: Joi.string().min(2).max(20).required(),
    password: Joi.string().pattern(/^[A-za-z0-9]{8,40}$/).required()
})

export {
    signupVal,
    signinVal
}