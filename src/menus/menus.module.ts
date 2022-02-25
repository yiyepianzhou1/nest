import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from 'mongoose';
const userSchema = new Schema({
  type: { type: String, required: false },
});

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Menus', schema: userSchema }])],
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
