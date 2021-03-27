import { Request, Response } from "express";
import { CreateUserService } from '../services/CreateUserService';
import { UserRepository } from '../repositories/UserRepository';

interface IRequest {
    username: string;
    email: string;
    password: string;
}

class UserController {

    public async create(request: Request, response: Response): Promise<Response> {
        const userRepository = new UserRepository();

        const { username, email, password }: IRequest = request.body;

        const createUserService = new CreateUserService(userRepository);

        const user = await createUserService.execute({
            username,
            email,
            password
        });

        return response.json(user);
    }
}

export { UserController };

