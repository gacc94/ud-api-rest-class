import {deleteUserById, findByIdAndUpdate, getUserById, getUsers, saveUser, updateUserById} from "../models/user.model";
import {User} from "../schemas/user.schema";
import {genSaltSync, hashSync} from 'bcryptjs';

export const  getUsersSvc = async (limit?: number, desde?: number) => {
    if (!limit || !desde ) {
        limit = 0; desde = 0
    }
    return getUsers(limit, desde);
}

export const getUserByIdSvc = async (id: string) => {
    return getUserById(id);
}

export const saveUserSvc = async (user: User) => {
    const { password} = user;
    const salt: string = genSaltSync();
    user.password = hashSync(password, salt);
    return await saveUser(user);
}

export const updateUserByIdsSvc = (id: string, user: Partial<User>) => {
    return updateUserById(id, user)
}

export const deleteUserByIdSvc = (id: string) => {
    // return deleteUserById(id);
    return findByIdAndUpdate(id);
}