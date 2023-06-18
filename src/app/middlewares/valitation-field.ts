import {NextFunction, Request, Response} from "express";
import {CategoryModel} from "../models/category.model";
import {CategorySchema} from "../schemas";
import {UserModel} from "../models/user.model";

export const validationSaveCategory = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const category: CategorySchema = request.body;
        const categoryFind = await CategoryModel.findOne({name: category.name, state: true},{})
        const user = await UserModel.findOne({_id: category.owner, estate: true})
        console.log(user);
        if (categoryFind) return  response.status(400).json({message: 'Ya existe esta categoria'})
        return next()
    } catch (err) {
        console.log((err as Error).message);
        response.status(400).json({message: 'Error al guardar categoria'})
    }
}
