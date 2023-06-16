import {Router} from "express";
import {UserController} from "../controllers/user.controller";
import {check} from "express-validator";
import {isExistEmail} from "../middlewares/errors-validation";

export const userRouter = Router();

userRouter.get('/', UserController.getUsers)
    .get('/:id', UserController.getUserById)
    .post('/', [
        check('email', 'Correo invalido').isEmail(),
        check('name', 'el nombre es obligatorio').not().isEmpty(),
        isExistEmail
    ], UserController.saveUser)
    .put('/:id', UserController.updateUserById)
    .delete('/:id', UserController.deleteUserById)
