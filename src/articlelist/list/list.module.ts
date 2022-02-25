import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'article_list', schema: {} }])],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
