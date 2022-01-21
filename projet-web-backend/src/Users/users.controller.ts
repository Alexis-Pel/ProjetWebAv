import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/create-users-dto';

@Controller('users')
export class UsersController {
  constructor(private customerService: UsersService) {}

  // add a customer
  @Post('/create')
  async addUser(@Res() res, @Body() createCustomerDTO: CreateUsersDTO) {
    const customer = await this.customerService.addUser(createCustomerDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been created successfully',
      customer,
    });
  }

  // Retrieve customers list
  @Get('users')
  async getAllUsers(@Res() res) {
    const customers = await this.customerService.getAllUsers();
    return res.status(HttpStatus.OK).json(customers);
  }

  // Fetch a particular customer using ID
  @Get('customer/:customerID')
  async getUser(@Res() res, @Param('customerID') customerID) {
    const customer = await this.customerService.getUser(customerID);
    if (!customer) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json(customer);
  }

  @Put('/update')
  async updateUser(
    @Res() res,
    @Query('customerID') customerID,
    @Body() createCustomerDTO: CreateUsersDTO,
  ) {
    const customer = await this.customerService.updateUser(
      customerID,
      createCustomerDTO,
    );
    if (!customer) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been successfully updated',
      customer,
    });
  }

  // Delete a customer
  @Delete('/delete')
  async deleteUser(@Res() res, @Query('customerID') customerID) {
    const customer = await this.customerService.deleteUser(customerID);
    if (!customer) throw new NotFoundException('Customer does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been deleted',
      customer,
    });
  }
}
