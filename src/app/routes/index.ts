import {Router} from "express";
import {userRouter} from './user.route';
import {authRouter} from './auth.route';
import {roleRouter} from "./role.route";

export interface Routes {
    path: string;
    router: Router;
}

export const mainRoutes: Routes[] = [
    {
        path: 'auth',
        router: authRouter,
    },
    {
        path: 'users',
        router: userRouter
    },
    {
        path: 'roles',
        router: roleRouter
    }
]

