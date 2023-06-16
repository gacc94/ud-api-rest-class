import {deleteUserById, getUserByEmail, getUserById, getUsers, saveUser, updateUserById} from "../models/user.model";
import {User} from "../schemas/user.schema";
import {genSaltSync, hashSync} from 'bcryptjs';

export const  getUsersSvc = async () => {
    const users = await getUsers();
    return users;
}

export const getUserByIdSvc = async (id: string) => {
    return getUserById(id);
}

export const saveUserSvc = async (user: User) => {
    const {email, password} = user;
    const existEmail  = await getUserByEmail(email);
    if (existEmail) throw new Error('CORREO_REGISTER');

    const salt: string = genSaltSync();
    user.password = hashSync(password, salt);

    return await saveUser(user);
}

export const updateUserByIdsSvc = (id: string, user: Partial<User>) => {
    return updateUserById(id, user)
}

export const deleteUserByIdSvc = (id: string) => {
    return deleteUserById(id);
}