import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/create-users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    addUsers(res: any, createUsersDTO: CreateUsersDTO): Promise<any>;
    getAllUsers(res: any): Promise<any>;
    getUsers(res: any, usersID: any): Promise<any>;
    updateUsers(res: any, usersID: any, createUsersDTO: CreateUsersDTO): Promise<any>;
    deleteUsers(res: any, usersID: any): Promise<any>;
}
