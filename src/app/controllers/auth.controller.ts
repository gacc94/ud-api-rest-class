import {Request, Response} from "express";
import {AuthService} from "../services/auth.service";

export abstract class AuthController {

    static async signIn(request: Request, response:Response) {
        try {
            const {email, password} = request.body;

            const data = await AuthService.signIn(email, password);

            return response.status(200).json(data);
        } catch (err) {

        }
    }

    static async signUp(request: Request, response:Response){
        try {

        } catch (err) {

        }
    }

}