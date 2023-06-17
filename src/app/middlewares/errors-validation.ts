import {NextFunction, Request, Response} from "express";
import {check, Result, ValidationError, validationResult} from "express-validator";
import { validatorsCreate} from "../utils/helpers/validators";

export const isExistEmail = async (request: Request, response: Response, next: NextFunction) => {

    const errors: Result<ValidationError> = validationResult(request);
    if (!errors.isEmpty()) return response.status(400).json(errors);
    return next();
}

export const validatorCreate = [
    check('email', 'Correo invalido').isEmail().not().isEmpty(),
    check('name', 'el nombre es obligatorio').not().isEmpty(),
]