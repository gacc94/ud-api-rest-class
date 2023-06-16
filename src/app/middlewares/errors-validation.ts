import {NextFunction, Request, Response} from "express";
import {Result, ValidationError, validationResult} from "express-validator";

export const isExistEmail = async (request: Request, response: Response, next: NextFunction) => {

    const errors: Result<ValidationError> = validationResult(request);
    if (!errors.isEmpty()) return response.status(400).json(errors);


    next();
}

