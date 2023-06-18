import {Router} from "express";
import {AuthController} from "../controllers/auth.controller";
import {validateSignIn} from "../utils/helpers/validators";

export const authRouter = Router();

authRouter.post('/sign-in', validateSignIn, AuthController.signIn)
    .post('/sign-up', AuthController.signUp);
