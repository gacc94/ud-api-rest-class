import express, {Response, Request, Express} from 'express';
import cors from 'cors';
import {routes, Routes} from "./routes";
import router from "./routes/user.routes";
import userRoutes from "./routes/user.routes";

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
        const routes = new Routes().getRoutes();
        this.app.use('/', routes);
        this.app.use('/user/', userRoutes)
    }

    start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`)
        });
    }
}
