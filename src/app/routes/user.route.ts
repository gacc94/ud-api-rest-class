import {Router} from "express";
import {UserController} from "../controllers/user.controller";
import {check} from "express-validator";
import {isExistEmail, validatorCreate} from "../middlewares/errors-validation";

export const userRouter = Router();

userRouter.get('/', UserController.getUsers)
    .get('/:id', UserController.getUserById)
    .post('/', validatorCreate , isExistEmail, UserController.saveUser)
    .put('/:id', UserController.updateUserById)
    .delete('/:id', UserController.deleteUserById)
