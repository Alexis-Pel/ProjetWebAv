import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Messages } from './interfaces/messages.interface';
import { CreateMessagesDTO } from './dto/create-messages-dto';

@Injectable()
export class MessagesService {
  constructor(@InjectModel('Messages') private readonly messageModel: Model<Messages>) {}
  // fetch all messages
  async getAllMessages(): Promise<Messages[]> {
    const messages = await this.messageModel.find().exec();
    return messages;
  }
  // Get a single messages
  async getMessages(messagesID): Promise<Messages> {
    const messages = await this.messageModel.findById(messagesID).exec();
    return messages;
  }
      // Get a single messages by name
    async getMessagesByName(name): Promise<Messages> {
      const messages = await this.messageModel.findOne({"name":name}).exec();
      return messages;
    }
  // post a single messages
  async addName(createMessagesDTO: CreateMessagesDTO): Promise<Messages> {
    const newMessages = await new this.messageModel(createMessagesDTO);
    return newMessages.save();
  }
  // Edit messages details
  async updateMessages(
    messagesID,
    createMessagesDTO: CreateMessagesDTO,
  ): Promise<Messages> {
    const updatedMessages = await this.messageModel.findByIdAndUpdate(
      messagesID,
      createMessagesDTO,
      { new: true },
    );
    return updatedMessages;
  }
  // Delete a messages
  async deleteMessages(messagesID): Promise<any> {
    const deletedMessages = await this.messageModel.findByIdAndRemove(messagesID);
    return deletedMessages;
  }
}
