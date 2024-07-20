import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";
import secretKey from "../utils/env.File.js";


export const verifyToken = (req, res, next) => {

    let { token } = req.headers;

    jwt.verify(token, secretKey, async (err, decoded) => {
        if (err) return next(new AppError("Invalid token", 401));

        req.user = decoded;
        next();
    })
}