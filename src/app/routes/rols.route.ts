import {Router} from "express";
import {UserController} from "../controllers/user.controller";
import {check} from "express-validator";
import {isExistEmail} from "../middlewares/errors-validation";

export const rolRouter = Router();