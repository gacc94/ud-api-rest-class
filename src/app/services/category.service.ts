import {getCategories, saveCategory} from "../models/category.model";

export abstract class CategoryService {

    static async saveCategory(category: any) {
        return saveCategory(category);
    }

    static async getCategories() {
        return getCategories();
    }

    static async getCategoryByName() {

    }
}