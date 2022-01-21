import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './interfaces/users.interface';
import { CreateUsersDTO } from './dto/create-users.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private readonly usersModel: Model<Users>) { }
    // fetch all users
    async getAllUsers(): Promise<Users[]> {
        const users = await this.usersModel.find().exec();
        return users;
    }
    // Get a single users
    async getUsers(usersID): Promise<Users> {
        const users = await this.usersModel.findById(usersID).exec();
        return users;
    }
    // post a single users
    async addUsers(createUsersDTO: CreateUsersDTO): Promise<Users> {
        const newUsers = await new this.usersModel(createUsersDTO);
        return newUsers.save();
    }
    // Edit users details
    async updateUsers(usersID, createUsersDTO: CreateUsersDTO): Promise<Users> {
        const updatedUsers = await this.usersModel
            .findByIdAndUpdate(usersID, createUsersDTO, { new: true });
        return updatedUsers;
    }
    // Delete a users
    async deleteUsers(usersID): Promise<any> {
        const deletedUsers = await this.usersModel.findByIdAndRemove(usersID);
        return deletedUsers;
    }
}