import mongoose from "mongoose";


export const dbConnection = mongoose.connect("mongodb://127.0.0.1:27017/taskManager").then(() => {
    console.log("DataBase connected Successfully!!");
});
