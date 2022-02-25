import { Injectable, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<User>,
    private readonly httpService: HttpService,
  ) {}

  // 查询用户信息
  async findAll(): Promise<User[]> {
    const user = await this.userModel.find();
    return user;
  }
  // 查询单个用户信息
  async findOne(id: String | number): Promise<User> {
    const user = await this.userModel.findOne({ user_id: +id });
    return user;
  }
  // 增加信息
  async addUser(body: CreateUserDTO): Promise<void> {
    await this.userModel.create(body);
  }
  // 删除用户信息
  async deleteUser(id: String | number): Promise<string> {
    const result = await this.userModel.findOneAndDelete({
      user_id: Number(id),
    });
    return result ? '删除成功' : '未查询到当前用户信息';
  }
  // 转发
  async getDataList(): Promise<any> {
    const httpUrl = 'https://api.juejin.cn/user_api/v1/author/recommend';
    const params = {
      category_id: '',
      cursor: 0,
      limit: 20,
    };
    const { data } = await this.httpService
      .get(httpUrl, { params })
      .toPromise();
    return data;
  }
}
