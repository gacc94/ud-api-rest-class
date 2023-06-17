import {getModelForClass, modelOptions, post, pre, prop, Ref, ReturnModelType} from "@typegoose/typegoose";
import {User} from "./user.schema";
import {nanoid} from "nanoid";

@modelOptions({
    schemaOptions: {
        timestamps: true,
        _id: false,
        autoCreate: true,
    }
})
export class Comment {

    @prop({type: String})
    text!: string
}

@modelOptions({
    schemaOptions: {
        timestamps: true,
        versionKey: false,
        _id: true,
        autoCreate: true,
    }
})
@pre('save', () => {
    console.log(this)
})
@post<User>('save', () => {
    console.log('User saved')
})
class Product {

    @prop({type: String, required: true, trim: true})
    name!: string;

    @prop({required: true, default: () => nanoid()})
    sku!: string;

    @prop({type: Number, default: 0})
    price!: number;

    @prop({type: String, lowercase: true,})
    url!: string;

    @prop({type: () => [String]})
    tags!: string[];

    @prop({type: () => [Comment]})
    comments!: Comment[]

    @prop({ref: () => User})
    owner!: Ref<User>[];

    static async findByName(this: ReturnModelType<typeof User>, name: string) {
        return this.find({name})
    }

    encryptPassword(password: string) {
        return '123132sws1';
    }

}

export const ProductSchema = getModelForClass(Product, {});

const product = ProductSchema.create({
    name: 'Product 1',
    price: 121212,
    url: 'https://pricuts.com',
    tags: ['', '', ''],
    comments: [
        {
            text: 'texto 1',
            as: ''
        }
    ]
});

ProductSchema.findById(2).populate('owner');