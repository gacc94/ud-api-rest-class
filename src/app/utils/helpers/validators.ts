import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

export const validatorsCreate = (request: Request, response: Response, next: NextFunction) => {
    try {
        validationResult(request).throw();
        next();
    } catch (err) {
        console.log((err as Error).message);
    }
}