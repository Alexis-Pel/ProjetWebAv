import { Model } from 'mongoose';
import { Messages } from './interfaces/messages.interface';
import { CreateMessagesDTO } from './dto/create-messages-dto';
export declare class MessagesService {
    private readonly messageModel;
    constructor(messageModel: Model<Messages>);
    getAllMessages(): Promise<Messages[]>;
    getMessages(messagesID: any): Promise<Messages>;
    getMessagesByName(name: any): Promise<Messages>;
    addName(createMessagesDTO: CreateMessagesDTO): Promise<Messages>;
    updateMessages(messagesID: any, createMessagesDTO: CreateMessagesDTO): Promise<Messages>;
    deleteMessages(messagesID: any): Promise<any>;
}
