import { User } from "../../database/models/user.model.js";
import { AppError } from "../utils/appError.js";

const checkUserName = async (req, res, next) => {
    let isFound = await User.findOne({ userName: req.body.userName });
    if (isFound) next(new AppError("This username is already exist.", 409))
    else next();
}
const checkEmail = async (req, res, next) => {
    let isFound = await User.findOne({ email: req.body.email });
    if (isFound) next(new AppError("This email is already exist.", 409))
    else next();
}


export {
    checkUserName,
    checkEmail,
}