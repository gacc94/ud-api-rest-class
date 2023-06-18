import {modelOptions, prop, Ref} from "@typegoose/typegoose";
import {User} from "./user.schema";

@modelOptions({
    schemaOptions: {
        timestamps: true,
    }
})
export class CategorySchema {

    @prop({type: String, required: [true, 'El nombre es obligatorio'] })
    name!: string

    @prop({type: Boolean, default: true, required: true})
    state!: boolean

    @prop({required: true, ref: () => User})
    owner!: Ref<User>[]

}

