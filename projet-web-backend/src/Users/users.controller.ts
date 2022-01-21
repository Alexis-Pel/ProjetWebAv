import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    // add a users
    @Post('/create')
    async addUsers(@Res() res, @Body() createUsersDTO: CreateUsersDTO) {
        const users = await this.usersService.addUsers(createUsersDTO);
        return res.status(HttpStatus.OK).json({
            message: "Users has been created successfully",
            users
        })
    }

    // Retrieve userss list
    @Get('users')
    async getAllUsers(@Res() res) {
        const users = await this.usersService.getAllUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    // Fetch a particular users using ID
    @Get('users/:usersID')
    async getUsers(@Res() res, @Param('usersID') usersID) {
        const users = await this.usersService.getUsers(usersID);
        if (!users) throw new NotFoundException('users does not exist!');
        return res.status(HttpStatus.OK).json(users);
    }
        // Update a users's details
        @Put('/update')
        async updateUsers(@Res() res, @Query('usersID') usersID, @Body() createUsersDTO: CreateUsersDTO) {
            const users = await this.usersService.updateUsers(usersID, createUsersDTO);
            if (!users) throw new NotFoundException('users does not exist!');
            return res.status(HttpStatus.OK).json({
                message: 'Users has been successfully updated',
                users
            });
        }
    
        // Delete a users
        @Delete('/delete')
        async deleteUsers(@Res() res, @Query('usersID') usersID) {
            const users = await this.usersService.deleteUsers(usersID);
            if (!users) throw new NotFoundException('Users does not exist');
            return res.status(HttpStatus.OK).json({
                message: 'Users has been deleted',
                users
            })
        }
    
}