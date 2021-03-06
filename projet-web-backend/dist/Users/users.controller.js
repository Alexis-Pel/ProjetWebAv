"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_users_dto_1 = require("./dto/create-users-dto");
let UsersController = class UsersController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async addUser(res, createCustomerDTO) {
        const customer = await this.customerService.addUser(createCustomerDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Customer has been created successfully',
            customer,
        });
    }
    async getAllUsers(res) {
        const customers = await this.customerService.getAllUsers();
        return res.status(common_1.HttpStatus.OK).json(customers);
    }
    async getUserByMail(res, email) {
        const customer = await this.customerService.getUserByMail(email);
        if (!customer)
            throw new common_1.NotFoundException('Customer does not exist!');
        return res.status(common_1.HttpStatus.OK).json(customer);
    }
    async getUser(res, id) {
        const customer = await this.customerService.getUser(id);
        if (!customer)
            throw new common_1.NotFoundException('Customer does not exist!');
        return res.status(common_1.HttpStatus.OK).json(customer);
    }
    async updateUser(res, customerID, createCustomerDTO) {
        const customer = await this.customerService.updateUser(customerID, createCustomerDTO);
        if (!customer)
            throw new common_1.NotFoundException('Customer does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Customer has been successfully updated',
            customer,
        });
    }
    async deleteUser(res, customerID) {
        const customer = await this.customerService.deleteUser(customerID);
        if (!customer)
            throw new common_1.NotFoundException('Customer does not exist');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Customer has been deleted',
            customer,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_users_dto_1.CreateUsersDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUser", null);
__decorate([
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('userbymail/:email'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserByMail", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('customerID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_users_dto_1.CreateUsersDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('customerID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map