import { IUserRepository } from "../repositories/IUserRepository";
import { User } from '../models/User';

interface CreateUserDTO {
    username: string;
    email: string;
    password: string;
}

class CreateUserService {

    constructor(private userRepository: IUserRepository) { }

    async execute({ username, email, password }: CreateUserDTO): Promise<User> {
        const user = await this.userRepository.create({
            username,
            email,
            password
        });

        return user;
    }
}

export { CreateUserService };