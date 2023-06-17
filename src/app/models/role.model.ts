import {getModelForClass} from "@typegoose/typegoose";
import {Role} from "../schemas/role.schema";

export const RoleModel = getModelForClass(
    Role, {options: {customName: 'roles'}})

export const saveRole = (role: Partial<Role>) => RoleModel.create(role);