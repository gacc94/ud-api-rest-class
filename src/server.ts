require('module-alias/register') //* Import Module-Alias
import {Configuration} from "./app/config/config";
import app, {App} from './app/app';
import database, {DBConnection} from "./app/database/connection";

class Server {
    public app: App;
    public db: DBConnection;

    constructor() {
        this.db = database;
        this.app = app;
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
