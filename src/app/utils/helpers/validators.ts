import {NextFunction, Request, Response} from "express";
import {check, Result, ValidationChain, ValidationError, validationResult} from "express-validator";
import {RoleModel} from "../../models/role.model";
import {getUserByEmail, getUserById, } from "../../models/user.model";
import {compare} from 'bcryptjs'
import {errors} from "@typegoose/typegoose";

export const validatorsCreate = (request: Request, response: Response, next: NextFunction) => {
    try {
        validationResult(request).throw();
        next();
    } catch (err) {
        console.log((err as Error).message);
    }
}

export const existUserById = async (id: string) => {
    const user = await getUserById(id);
    if (!user) throw new Error(`El id no existe: ${id} `)
}

export const isExistEmail = async (email: string) => {
    const user = await getUserByEmail(email);
    if (user) throw new Error  (`Existe un usuario con el email ${email}`)
}

export const isRolValid = async (rol: any) => {
    const existRol = await RoleModel.findOne({rol});
    if (!existRol) throw new Error(`El rol ${rol} no esta registrado en la BD `)
}

export const validationErrors = async (request: Request, response: Response, next: NextFunction) => {
    const errors: Result<ValidationError> = validationResult(request);
    console.log(!errors.isEmpty());
    if (!errors.isEmpty()) return response.status(400).json(errors);
    return next();
}

export const validationBcryptPassword = async (request: Request, response: Response, next: NextFunction) => {
    const {email, password} = request.body;
    const user = await getUserByEmail(email);
    if (!user) return response.sendStatus(400)
    const isValidPassword = await compare(password, user.password );
    if (!isValidPassword)  return response.status(400).json('Errror')
    return next();
}

export const validateSignIn: Array<(ValidationChain | any)> = [
    check('email', 'email is required').not().isEmpty(),
    check('email', 'email invalid').isEmail(),
    check('password').not().isEmpty(),
    validationBcryptPassword,
    validationErrors,
]

export const validatorCreate: (ValidationChain | any)[] = [
    check('email').custom(isExistEmail),
    check('email', 'Correo invalido').isEmail().not().isEmpty(),
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('rol').custom(isRolValid),
    validationErrors
]

export const validateUpdate: (ValidationChain | any)[] = [
    check('id').custom(existUserById),
    check('rol').custom(isRolValid),
    validationErrors,
]

export const validateDelete: Array<(ValidationChain | any)> = [
    check('id').not().isEmpty().isMongoId(),
    check('id').custom(existUserById),
    validationErrors,
]