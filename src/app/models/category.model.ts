import {getModelForClass} from "@typegoose/typegoose";
import {isValidObjectId} from "mongoose";
import {CategorySchema} from "../schemas";

export const CategoryModel = getModelForClass(CategorySchema,
    {options: {customName: 'categories'}})


export const saveCategory = (category: any) => CategoryModel.create(category);
export const getCategoryByField = async (field: string) => await CategoryModel.findOne({field});
export const getCategories = async () =>
    await CategoryModel.find().populate('owner');
export const getCategoryByName = async (name: string) => await CategoryModel.findOne({name});