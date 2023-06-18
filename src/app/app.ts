import express, {Express} from 'express';
import cors from 'cors';
import {mainRoutes, Routes} from "./routes";

export class App {
    public app: Express;
    private DB_URI: string = '';

    public port: string;

    constructor(port: string) {
        this.app = express();
        this.port = port;
        this.configurationInit()
    }

    private configurationInit(): void {
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes(): void {
        // const routes = new Routes().getRoutes();
        mainRoutes.forEach(({path, router}: Routes) => {
            this.app.use(`/api/v1/${path}`, router)
        })
        // this.app.use('/', routes);
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`)
        });
    }
}
