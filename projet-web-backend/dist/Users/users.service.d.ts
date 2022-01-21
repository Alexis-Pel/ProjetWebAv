import { Model } from 'mongoose';
import { Users } from './interfaces/users.interface';
import { CreateUsersDTO } from './dto/create-users.dto';
export declare class UsersService {
    private readonly usersModel;
    constructor(usersModel: Model<Users>);
    getAllUsers(): Promise<Users[]>;
    getUsers(usersID: any): Promise<Users>;
    addUsers(createUsersDTO: CreateUsersDTO): Promise<Users>;
    updateUsers(usersID: any, createUsersDTO: CreateUsersDTO): Promise<Users>;
    deleteUsers(usersID: any): Promise<any>;
}
