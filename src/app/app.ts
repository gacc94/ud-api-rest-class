import express, {Application} from 'express';
import cors from 'cors';

export class App {
    private app!: Application;
    private DB_URI: string = '';

    public port: string;

    constructor(port: string) {
        this.app = express();
        this.port = port;
        this.configurationInit()
    }

    private configurationInit(): void {
        this.middlewares();
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use();
    }

    start(): void {
        this.app.listen(this.port, () => {
            console.log('Server running on http://localhost:3030')
        });
    }


}