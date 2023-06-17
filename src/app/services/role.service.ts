import {Role} from "../schemas/role.schema";
import {saveRole} from "../models/role.model";

export const saveRoleSvc = async (role: Partial<Role>) => {
    return saveRole(role);
}
