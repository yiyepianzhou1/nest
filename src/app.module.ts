import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MenusModule } from './menus/menus.module';
import { ListModule } from './articlelist/list/list.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mydemo'),
    UserModule,
    MenusModule,
    ListModule,
  ],
})
export class AppModule {}
