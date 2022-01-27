import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './Messages/messages.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.ufmwy.mongodb.net/projetweb?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
    UsersModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
