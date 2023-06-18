import {getModelForClass, modelOptions, prop, ReturnModelType} from "@typegoose/typegoose";
import {User} from "./user.schema";

@modelOptions({
    schemaOptions: {
        timestamps: true,
        _id: true
    }
})
export class Role {

    @prop({type: String, required: [true, 'El rol es obligatorio']})
    rol!: string;

}

