import {Router} from "express";
import UserRoute from './user.routes';

export class Routes {
    public router!: Router;

    constructor() {
        this.router = Router();
        this.configureRoutes()
    }

    private configureRoutes() {
        this.router.get('/user', (req, res, next) => {
            const headers = req.headers
            const params = req.params
            res.status(200).send({headers, params});
        });

        this.router.get('/auth', (req, res) => {
            res.send('Es auth').end()
        })
    }

    getRoutes(): Router {
        return this.router;
    }

}

export const routes = {
    UserRoute
}