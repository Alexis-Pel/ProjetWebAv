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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let MessagesService = class MessagesService {
    constructor(messageModel) {
        this.messageModel = messageModel;
    }
    async getAllMessages() {
        const messages = await this.messageModel.find().exec();
        return messages;
    }
    async getMessages(messagesID) {
        const messages = await this.messageModel.findById(messagesID).exec();
        return messages;
    }
    async getMessagesByName(name) {
        const messages = await this.messageModel.findOne({ "name": name }).exec();
        return messages;
    }
    async addName(createMessagesDTO) {
        const newMessages = await new this.messageModel(createMessagesDTO);
        return newMessages.save();
    }
    async updateMessages(messagesID, createMessagesDTO) {
        const updatedMessages = await this.messageModel.findByIdAndUpdate(messagesID, createMessagesDTO, { new: true });
        return updatedMessages;
    }
    async deleteMessages(messagesID) {
        const deletedMessages = await this.messageModel.findByIdAndRemove(messagesID);
        return deletedMessages;
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Messages')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map