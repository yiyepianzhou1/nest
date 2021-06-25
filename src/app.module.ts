import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mydemo'),
    UserModule,
    MenusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
