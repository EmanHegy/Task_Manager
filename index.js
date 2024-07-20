process.on('uncaughtException', (err) => {
    console.log('uncaughtException triggered', err);
})

import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js';
import categoryRouter from './src/modules/category/category.routes.js';
import taskRouter from './src/modules/task/task.routes.js';
import { globalError } from './src/middleware/globalError.js';
import { AppError } from './src/utils/appError.js';

const app = express()
const port = 3000
app.use(express.json())


app.use('/auth', userRouter);
app.use('/category', categoryRouter);
app.use('/task', taskRouter);





app.use('*', (req, res, next) => {
    next(new AppError(`route not found ${req.originalUrl}`, 404));
})

app.use(globalError);

process.on('unhandledRejection', (err) => {
    console.log('unhandledRejection triggered', err);
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))