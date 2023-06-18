import {getModelForClass} from "@typegoose/typegoose";
import {User} from "../schemas/user.schema";

export const  UserModel =  getModelForClass(User,{});

// export const getUsers = () => UserModel.find({}, {email: true, _id: 0});
export const getUsers = (limit: number, desde: number) =>
    UserModel.find({estate: true}).limit(limit).skip(desde).populate('role');
export const getUserById = (id: string) => UserModel.findById(id);
export const saveUser = (user: User)  => UserModel.create(user);
export const getUserByEmail = (email: string) => UserModel.findOne({email: email});
export const updateUserById = (id: string, data: Record<any, any>) =>
    UserModel.findOneAndUpdate({_id:id}, data, {new: true});
export const deleteUserById = (id: string) =>
    UserModel.findOneAndDelete({_id:id});
export const deleteManyByName = (name: string) => UserModel.deleteMany({name: name});
export const totalUsers = () => UserModel.countDocuments({estate: true});
export const findByIdAndUpdate = (id: string) => UserModel.findByIdAndUpdate(id, {estate: false })