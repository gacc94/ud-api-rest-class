import {Router} from "express";
import {CategoryController} from "../controllers/category.controller";
import {validationJwt} from "../middlewares/validation-jwt";
import {validationSaveCategory} from "../middlewares/valitation-field";
import {check} from "express-validator";

const categoryRouter: Router = Router();

categoryRouter.post('/', [
        // validationJwt,
        // validationSaveCategory,
    ],
    CategoryController.saveCategory
)
categoryRouter.get('/', CategoryController.getCategories);

export default categoryRouter;