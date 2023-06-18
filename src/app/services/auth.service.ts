import {getUserByEmail} from "../models/user.model";
import {generateJWT} from "../utils/helpers/jwt.handle";
import {User} from "../schemas/user.schema";
import {mapperDto} from "./user.service";

export class AuthService {

    static async signIn(email: string, password: string) {
        const user: User = await getUserByEmail(email) as User;
        const userDto = mapperDto(user);
        const jwt = await generateJWT(userDto);
        return {user, jwt}
    }

}