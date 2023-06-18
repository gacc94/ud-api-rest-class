import {prop, modelOptions, Ref} from "@typegoose/typegoose";
import {Role} from "./role.schema";
import {v4 } from 'uuid';
import {nanoid} from "nanoid";

@modelOptions({
    schemaOptions: {
        timestamps: true,
        versionKey: false,
        _id: true,
        autoCreate: true,
    }
})
export class User {

    @prop({
        required: [true, 'El nombre es obligatorio'], type: String
    })
    name!: string;

    @prop({required: true, default: () => v4() })
    sku!: string;

    @prop({
        required: [true, 'El email es obligatorio'], unique: true, trim: true, type: String
    })
    email!: string;

    @prop({
        required: [true, 'La contraseña es obligatorio'], type: String
    })
    password!: string;

    @prop({type: [String]})
    img!: Array<string>;

    // @prop({type: String, required: true, enum: ['ADMIN', 'USER']})
    @prop({ref: () => Role , required: true}) //*Este usuario puede tener 1 o mas roles / Array<Role>
    roles!: Ref<Role>[];

    @prop({type: String, default: true})
    estate!: boolean

    @prop({type: Boolean, default: false})
    google!: boolean;
}