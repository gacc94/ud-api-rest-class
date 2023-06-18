import {Request, Response} from "express";
import {CategoryService} from "../services/category.service";
import {CategoryModel} from "../models/category.model";

export abstract class CategoryController {

    static async saveCategory(request: Request, response: Response) {
        try {
            const {name, owner} = request.body;
            const category = await CategoryService.saveCategory({name, owner});

            return response.status(201).json(category);

        } catch (err) {
            console.log(err);
        }
    }

    static async getCategories(request: Request, response: Response) {
        try {
            const categories = await CategoryService.getCategories();
            console.log(categories);
            return response.status(200).json(categories);
        } catch (err) {
            console.log(err);
        }
    }

}

