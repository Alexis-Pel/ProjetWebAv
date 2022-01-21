import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/users.interface';
import { CreateUsersDTO } from './dto/create-users-dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  // fetch all users
  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }
  // Get a single customer
  async getUser(customerID): Promise<User> {
    const customer = await this.userModel.findById(customerID).exec();
    return customer;
  }
  // post a single customer
  async addUser(createUsersDTO: CreateUsersDTO): Promise<User> {
    const newCustomer = await new this.userModel(createUsersDTO);
    return newCustomer.save();
  }
  // Edit customer details
  async updateUser(
    customerID,
    createCustomerDTO: CreateUsersDTO,
  ): Promise<User> {
    const updatedCustomer = await this.userModel.findByIdAndUpdate(
      customerID,
      createCustomerDTO,
      { new: true },
    );
    return updatedCustomer;
  }
  // Delete a customer
  async deleteUser(customerID): Promise<any> {
    const deletedCustomer = await this.userModel.findByIdAndRemove(customerID);
    return deletedCustomer;
  }
}
