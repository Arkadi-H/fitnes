const {validationResult} = require("express-validator");
const AppError = require('../managers/app-error');
const responseManager = require('../managers/response-manager');

module.exports = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.onError(new AppError("Validation error", 403), {errors: errors.mapped()})
    }
    next();
}