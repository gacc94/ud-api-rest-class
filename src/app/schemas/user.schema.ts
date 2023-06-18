import {prop, modelOptions} from "@typegoose/typegoose";
import {Role} from "./role.schema";
import * as uu from 'uuid';
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

    @prop({required: true, default: () => uu.v4() })
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
    img!: string;

    @prop({type: String, required: true, enum: ['ADMIN', 'USER']})
    rol!: string;

    @prop({type: String, default: true})
    estate!: boolean

    @prop({type: Boolean, default: false})
    google!: boolean;
}