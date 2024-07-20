import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import secretKey from '../../utils/env.File.js';
import { AppError } from '../../utils/appError.js';
import { catchError } from './../../middleware/catchError.js';
import { User } from "../../../database/models/user.model.js";



const signup = catchError(async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    let user = await User.insertMany(req.body);
    user[0].password = undefined;
    res.status(200).json({ message: "Success", user });
});


const signin = catchError(async (req, res, next) => {
    let user = await User.findOne({ userName: req.body.userName });
    if (!user || !bcrypt.compareSync(req.body.password, user.password))
        return next(new AppError("username or password is incorrect.", 401));
    jwt.sign({ userId: user._id, userName: user.userName, email: user.email },
        secretKey,
        (err, token) => {
            if (err) return next(new AppError(err, 401))

            user.password = undefined;
            res.status(200).json({ message: "success", user, token });
        })
})


export {
    signup,
    signin
}