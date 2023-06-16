import {config} from 'dotenv'
import {ConstantsUtil} from "../utils/library/constants.util";

// if(process.env.NODE_ENV !== 'production'){
    config();
// }

export abstract class Configuration {

    static readonly PORT: string =  process.env.PORT ?? ConstantsUtil.DEFAULT_PORT ;
    static readonly MONGO_URI = process.env.MONGO_URI ?? '';

}
