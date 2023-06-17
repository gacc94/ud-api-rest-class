import {Router} from "express";
import {UserController} from "../controllers/user.controller";
import {validateDelete, validateUpdate, validatorCreate} from "../utils/helpers/validators";

export const userRouter = Router();

userRouter.get('/', UserController.getUsers)
    .get('/:id', UserController.getUserById)
    .post('/', validatorCreate , UserController.saveUser)
    .put('/:id', validateUpdate, UserController.updateUserById)
    .delete('/:id', validateDelete ,UserController.deleteUserById)
