import {findByIdAndUpdate, getUserByEmail, getUserById, getUsers, saveUser, updateUserById} from "../models/user.model";
import {User} from "../schemas/user.schema";
import {genSaltSync, hash} from 'bcryptjs';
import {UserDTO} from "../utils/class/userDTO";



export const  getUsersSvc = async (limit?: number, desde?: number) => {
    if (!limit || !desde ) limit = 0; desde = 0;
    const users = await getUsers(limit, desde);
    let usersDto: any[] = [];
    users.forEach((user) => {  //* MALA PRACTICA HACER ESTO - MEJOR EL PATRON BUILDER
        usersDto.push( mapperDto(user));
    })
    return usersDto;
}

export const getUserByIdSvc = async (id: string) => {
    const user = await getUserById(id);
    return mapperDto(user);
}

export const saveUserSvc = async (user: User) => {
    const { password} = user;
    const salt: string = genSaltSync();
    user.password = await hash(password, salt);
    return await saveUser(user);
}

export const updateUserByIdsSvc = (id: string, user: Partial<User>) => {
    return updateUserById(id, user)
}

export const getUserByEmailSvc = (email: string) => {
    return getUserByEmail(email);
}

export const deleteUserByIdSvc = (id: string) => {
    // return deleteUserById(id);
    return findByIdAndUpdate(id);
}

export const mapperDto = (user: any): UserDTO => {
    const userDto: UserDTO = new UserDTO();
    userDto.setName = user.name;
    userDto.setEmail = user.email;
    userDto.setRol = user.rol;
    userDto.setSku = user.sku;
    userDto.setEstate = user.estate;
    return userDto
}

