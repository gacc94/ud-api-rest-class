import {Request, Response} from "express";
import {
    deleteUserByIdSvc,
    getUserByIdSvc,
    getUsersSvc,
    saveUserSvc,
    updateUserByIdsSvc
} from "../services/user.service";
import {User} from "../schemas/user.schema";

export abstract class UserController {

    static async getUsers(request: Request, response:Response) {
        try {
            const users = await getUsersSvc();
            return response.send(users);


        } catch (e) {
            response.status(400).send('Error');
        }
    }

    static async getUserById(request: Request, response: Response) {
        try {
            const {id} = request.params
            const user = await getUserByIdSvc(id);
            response.send(user);
        } catch (e) {
            response.status(400).send('Error');
        }
    }

    static async saveUser(request: Request, response: Response) {
        try {
            const user: User = request.body;
            const newUser = await saveUserSvc(user);

            return response.status(200).send(newUser);
        } catch (err) {
            console.log((err as Error).message )
            response.status(400).send((err as Error).message);
        }
    }

    static async updateUserById(request: Request, response: Response) {
        try {
            const {id} = request.params;
            const user = request.body;

            const newUser = await updateUserByIdsSvc(id, user);

            return response.status(200).send(newUser);

        } catch (err) {
            console.log((err as Error).message )
            response.status(400).send((err as Error).message);
        }
    }

    static async deleteUserById(request: Request, response: Response) {
        try {
            console.log(request.params);
            const {id} = request.params;
            const user = await deleteUserByIdSvc(id);

            return response.status(200).send({message: 'DELETE_USER'});
        } catch (err) {
            console.log((err as Error).message )
            response.status(400).send((err as Error).message);
        }
    }
}
