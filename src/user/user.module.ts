import { Module, HttpModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Users', schema: userSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
