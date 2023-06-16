import {connect} from 'mongoose';
import {Observable} from "rxjs";

export class DBConnection {
    public URI: string;

    constructor(databaseURI: string) {
        this.URI = databaseURI;
    }

     async connectAsync(): Promise<void> {
        try {
            await connect(this.URI, {});
            console.log('Conexión exitosa a la base de datos');
        } catch (error) {
            console.error('Error de conexión a la base de datos:', error);
        }
    }

    connectObs(): Observable<any> {
        return new Observable((subscriber) => {
            connect(this.URI, {}).then((res) => {
                subscriber.next(res);
                subscriber.complete();
            }).catch((err) => {
                subscriber.error(err.message);
            })
        })
    }

}