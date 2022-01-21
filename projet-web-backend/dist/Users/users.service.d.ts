import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';
import { CreateUsersDTO } from './dto/create-users-dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getAllUsers(): Promise<User[]>;
    getUser(customerID: any): Promise<User>;
    getUserByMail(email: any): Promise<User>;
    addUser(createUsersDTO: CreateUsersDTO): Promise<User>;
    updateUser(customerID: any, createCustomerDTO: CreateUsersDTO): Promise<User>;
    deleteUser(customerID: any): Promise<any>;
}
