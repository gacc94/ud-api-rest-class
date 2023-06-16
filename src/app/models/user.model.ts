import {getModelForClass} from "@typegoose/typegoose";
import {User} from "../schemas/user.schema";

export const  UserModel =  getModelForClass(User,{});

export const getUsers = () => UserModel.find();
export const getUserById = (id: string) => UserModel.findById(id);
export const saveUser = (user: User)  => UserModel.create(user);
export const getUserByEmail = (email: string) => UserModel.findOne({email});
export const updateUserById = (id: string, data: Record<any, any>) =>
    UserModel.findOneAndUpdate({_id:id}, data);
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({_id:id});