import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MenusModule } from './menus/menus.module';
import { ListModule } from './articlelist/list/list.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mydemo'),
    UserModule,
    MenusModule,
    ListModule,
    AuthModule,
  ],
})
export class AppModule {}
