require('module-alias/register') //* Import Module-Alias
import {Configuration} from "./app/config/config";
import {App} from './app/app';
import {DBConnection} from "./app/database/connection";

class Server {
    public app: App;
    public db: DBConnection;

    constructor() {
        this.db = new DBConnection(Configuration.MONGO_URI);
        this.app = new App(Configuration.PORT);
    }

    start() {
        this.db.connectObs().subscribe({
            next: (value) => {
                console.log('Connection Database:(MongoDB) successfully ')
                this.app.listen();
            },
            error: (err: Error) => {
                console.log('Error connect DB: (MongoDB) ')
                console.log(err.message);
            }
        })
    }
}

new Server().start();
