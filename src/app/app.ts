import express, {Express} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {mainRoutes, Routes} from "./routes";
import {Configuration} from "./config/config";

export class App {
    public app: Express;
    public port: string;

    constructor() {
        this.app = express();
        this.port = Configuration.PORT;
        this.configurationInit()
    }

    private configurationInit(): void {
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.app.set('port', this.port);
        this.app.use(cors());
        this.app.use(morgan('dev')); //*IDEAL EN DEV
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
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server running on http://localhost:${this.port}`)
        });
    }
}

export default new App();