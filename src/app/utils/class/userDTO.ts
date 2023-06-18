export class UserDTO {
    private name!: string;
    private email!: string;
    private rol!: string;
    private sku!: string;
    private estate!: boolean;

    set setName(name: string) {
        this.name = name;
    }
    set setEmail(email: string) {
        this.email = email;
    }
    set setRol(rol: string) {
        this.rol = rol
    }
    set setSku(sku: string) {
        this.sku = sku;
    }
    set setEstate(estate: boolean) {
        this.estate = estate;
    }

    get getEmail(): string {
        return this.email;
    }

    get getRol(): string {
        return  this.rol;
    }
}

export interface IUserDTO {
    name: string;
    email: string;
    rol: string;
    sku: string;
    estate: boolean;
}