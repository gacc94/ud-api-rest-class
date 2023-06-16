import {Router} from "express";

export const authRouter = Router();

authRouter.get('/', (req, res) => {
    res.send({message: 'Soy auth sin ID'})
})
    .get('/:id', (req, res) => {
        res.send({message: 'Soy auth con ID'})
    });
