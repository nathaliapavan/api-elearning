import { User } from '../models/User';

interface IUser {
    username: string;
    email: string;
    password: string;
}

interface IUserRepository {
    create(data: IUser): Promise<User>;
    //save(user: User): Promise<User>;
}

export { IUserRepository, IUser };