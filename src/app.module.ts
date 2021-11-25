import { Module } from '@nestjs/common';
import { UserModule } from './server/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mydemo'),
    UserModule,
    MenusModule,
  ],
})
export class AppModule {}
