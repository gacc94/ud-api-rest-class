import {NextFunction, Request, response, Response} from "express";
import {verifyJWT} from "../utils/helpers/jwt.handle";
import {getUserByEmailSvc} from "../services/user.service";
import {IUserDTO, UserDTO} from "../utils/class/userDTO";

interface IPayload {
    data: IUserDTO;
}

export const validationJwt = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const jwt = request.header('authorization');
        if (!jwt) return response.status(401).json({msg: 'No token'})

        const payload: IPayload = await verifyJWT(jwt) as IPayload;
        const userDto: IUserDTO = payload.data;
        console.log(userDto);
        if (isValidRol(userDto.rol, 'ADMIN')) {
            return response.status(403).json({msg: 'FOR_BIDDEN'})
        }
        return next();

    } catch (err) {
        console.log((err as Error).message)
        response.status(401).json((err as Error).message)
    }
}

export const isValidRol = (rol: any, type: string) => {
    return (rol !== type.toUpperCase())
}