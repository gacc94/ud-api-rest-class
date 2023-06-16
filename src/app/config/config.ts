import {config} from 'dotenv'

// if(process.env.NODE_ENV !== 'production'){
    config();
// }

export abstract class Configuration {

    static readonly PORT: string =  process.env.PORT ?? '3000' ;
    static readonly MONGO_URI = process.env.MONGO_URI ?? '';

}
