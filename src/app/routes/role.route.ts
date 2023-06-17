import {Router} from "express";
import {RoleController} from "../controllers/role.controller";

export const roleRouter: Router = Router();

roleRouter.post('/', RoleController.saveRole)
    .get('/');