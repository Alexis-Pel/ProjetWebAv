import { MessagesService } from './messages.service';
import { CreateMessagesDTO } from './dto/create-messages-dto';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    addMessages(res: any, createMessagesDTO: CreateMessagesDTO): Promise<any>;
    getAllMessages(res: any): Promise<any>;
    getMessageByName(res: any, name: any): Promise<any>;
    getMessage(res: any, id: any): Promise<any>;
    updateMessage(res: any, messagesID: any, createMessagesDTO: CreateMessagesDTO): Promise<any>;
    deleteMessages(res: any, messagesID: any): Promise<any>;
}
