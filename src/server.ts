require('module-alias/register') //* Import Module-Alias
import {Configuration} from "./app/config/config";
import {App} from './app/app';
import {DBConnection} from "./app/database/connection";

const db = new DBConnection(Configuration.MONGO_URI);
const app = new App(Configuration.PORT);


db.connectObs().subscribe({
    next: (value) => {
        console.log('Connection Database:(MongoDB) successfully ')
        app.start();
    },
    error: (err) => {
        console.log('Error connect DB: (MongoDB) ')
        console.log(err);
    }
})

