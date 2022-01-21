import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/create-users-dto';
export declare class UsersController {
    private customerService;
    constructor(customerService: UsersService);
    addUser(res: any, createCustomerDTO: CreateUsersDTO): Promise<any>;
    getAllUsers(res: any): Promise<any>;
    getUser(res: any, customerID: any): Promise<any>;
    updateUser(res: any, customerID: any, createCustomerDTO: CreateUsersDTO): Promise<any>;
    deleteUser(res: any, customerID: any): Promise<any>;
}
