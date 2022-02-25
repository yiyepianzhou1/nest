import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List } from './list.interface';
@Injectable()
export class ListService {
  constructor(
    @InjectModel('article_list') private readonly articlelistModel: Model<List>,
  ) {}
  // 文章列表
  async getArticleList(): Promise<List[]> {
    const data = await this.articlelistModel.find();
    return [];
  }
}
