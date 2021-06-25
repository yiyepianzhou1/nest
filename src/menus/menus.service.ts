import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu } from './menus.interface';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class MenusService {
  constructor(
    @InjectModel('Menuss') private readonly menusModel: Model<Menu>,
  ) {}
  // 查询菜单信息
  async getMenus(): Promise<Menu[]> {
    const result = await this.menusModel.find();
    console.log(result);
    return [];
  }
  // 删除菜单信息
  async delete(): Promise<string> {
    return '';
  }
}
