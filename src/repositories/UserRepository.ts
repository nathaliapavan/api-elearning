import { getRepository, Repository } from 'typeorm';
import { User } from '../models/User';
import { IUser, IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {

    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    async create(userData: IUser): Promise<User> {
        const user = this.ormRepository.create(userData);
        
        await this.ormRepository.save(user);
        console.log(user)
        return user;
    }

    //async save(user: User): Promise<User> {
    //    return this.ormRepository.save(user);
    //}
}

export { UserRepository };