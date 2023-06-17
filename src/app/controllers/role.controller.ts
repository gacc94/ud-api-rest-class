import {saveRole} from "../models/role.model";
import {Request, Response} from "express";
import {saveRoleSvc} from "../services/role.service";

export class RoleController {

    static async saveRole(request: Request, response:Response) {
        try {
            const role = request.body;
            const newRole = await saveRoleSvc(role);

            return response.status(200).send({message: 'CREATED', role: newRole})
        } catch (err) {
            console.log((err as Error).message )
            response.status(400).send((err as Error).message);
        }
    }

}