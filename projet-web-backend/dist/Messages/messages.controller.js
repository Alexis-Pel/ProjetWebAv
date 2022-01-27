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
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const create_messages_dto_1 = require("./dto/create-messages-dto");
let MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async addMessages(res, createMessagesDTO) {
        const messages = await this.messagesService.addName(createMessagesDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'discussion has been created successfully',
            messages,
        });
    }
    async getAllMessages(res) {
        const messages = await this.messagesService.getAllMessages();
        return res.status(common_1.HttpStatus.OK).json(messages);
    }
    async getMessageByName(res, name) {
        const messages = await this.messagesService.getMessagesByName(name);
        if (!messages)
            throw new common_1.NotFoundException('discussion does not exist!');
        return res.status(common_1.HttpStatus.OK).json(messages);
    }
    async getMessage(res, id) {
        const messages = await this.messagesService.getMessages(id);
        if (!messages)
            throw new common_1.NotFoundException('discussion does not exist!');
        return res.status(common_1.HttpStatus.OK).json(messages);
    }
    async updateMessage(res, messagesID, createMessagesDTO) {
        const messages = await this.messagesService.updateMessages(messagesID, createMessagesDTO);
        if (!messages)
            throw new common_1.NotFoundException('discussion does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'discussion has been successfully updated',
            messages,
        });
    }
    async deleteMessages(res, messagesID) {
        const messages = await this.messagesService.deleteMessages(messagesID);
        if (!messages)
            throw new common_1.NotFoundException('discussion does not exist');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'discussion has been deleted',
            messages,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_messages_dto_1.CreateMessagesDTO]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "addMessages", null);
__decorate([
    (0, common_1.Get)('messages'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getAllMessages", null);
__decorate([
    (0, common_1.Get)('messagebyname/:name'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getMessageByName", null);
__decorate([
    (0, common_1.Get)('message/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getMessage", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('messagesID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_messages_dto_1.CreateMessagesDTO]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "updateMessage", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('messagesID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "deleteMessages", null);
MessagesController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map