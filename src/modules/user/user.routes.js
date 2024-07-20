import { Router } from "express";
import { signin, signup } from "./user.controller.js";
import { signinVal, signupVal } from './user.validation.js';
import { validate } from "../../middleware/validate.js";
import { checkEmail, checkUserName } from "../../middleware/checkData.js";



const userRouter = Router();

userRouter.post('/signup', validate(signupVal), checkUserName, checkEmail, signup);
userRouter.post('/signin', validate(signinVal), signin);


export default userRouter;