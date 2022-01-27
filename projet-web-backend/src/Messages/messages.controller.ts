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
import { MessagesService } from './messages.service';
import { CreateMessagesDTO } from './dto/create-messages-dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  // add a messages
  @Post('/create')
  async addMessages(@Res() res, @Body() createMessagesDTO: CreateMessagesDTO) {
    const messages = await this.messagesService.addName(createMessagesDTO);
    return res.status(HttpStatus.OK).json({
      message: 'discussion has been created successfully',
      messages,
    });
  }

  // Retrieve messages list
  @Get('messages')
  async getAllMessages(@Res() res) {
    const messages = await this.messagesService.getAllMessages();
    return res.status(HttpStatus.OK).json(messages);
  }
  // Fetch a particular messages using ID
  @Get('messagebyname/:name')
  async getMessageByName(@Res() res, @Param('name') name) {
    const messages = await this.messagesService.getMessagesByName(name);
    if (!messages) throw new NotFoundException('discussion does not exist!');
    return res.status(HttpStatus.OK).json(messages);
  }

    // Fetch a particular messages using ID
    @Get('message/:id')
    async getMessage(@Res() res, @Param('id') id) {
      const messages = await this.messagesService.getMessages(id);
      if (!messages) throw new NotFoundException('discussion does not exist!');
      return res.status(HttpStatus.OK).json(messages);
    }

  @Put('/update')
  async updateMessage(
    @Res() res,
    @Query('messagesID') messagesID,
    @Body() createMessagesDTO: CreateMessagesDTO,
  ) {
    const messages = await this.messagesService.updateMessages(
      messagesID,
      createMessagesDTO,
    );
    if (!messages) throw new NotFoundException('discussion does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'discussion has been successfully updated',
      messages,
    });
  }

  // Delete a messages
  @Delete('/delete')
  async deleteMessages(@Res() res, @Query('messagesID') messagesID) {
    const messages = await this.messagesService.deleteMessages(messagesID);
    if (!messages) throw new NotFoundException('discussion does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'discussion has been deleted',
      messages,
    });
  }
}
