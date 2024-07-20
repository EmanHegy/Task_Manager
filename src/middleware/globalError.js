export const globalError = (err, req, res, next) => {
    let code = err.statusCode || 500;
    res.status(code)
        .json({ error: "error", message: err.message, code: code, stack: err.stack }); //, stack: err.stack 
}