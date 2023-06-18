import {sign, verify} from "jsonwebtoken";
import * as process from "process";
import {config} from 'dotenv'
import {User} from "../../schemas/user.schema";
import {UserDTO} from "../class/userDTO";
config();
const SECRET_KEY = process.env.SECRET_KEY ?? 'secret.01';

export const generateJWT = (data: UserDTO) =>
    new Promise((resolve, reject) => {
        const payload = {data};
        resolve(sign(payload , SECRET_KEY, {algorithm: 'HS256', expiresIn: '1h'}))
        reject('Error jwt')
    })

export const verifyJWT = (jwt: string) => verify(jwt, SECRET_KEY);