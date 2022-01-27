import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesSchema } from './schemas/messages.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Messages', schema: MessagesSchema }])],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
