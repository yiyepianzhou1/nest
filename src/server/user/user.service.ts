import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}

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
  async deleteUser(id: String): Promise<string> {
    const result = await this.userModel.findOneAndDelete({
      user_id: Number(id),
    });
    if (result) {
      return '删除成功';
    } else return '未查询到当前用户信息';
  }
}
