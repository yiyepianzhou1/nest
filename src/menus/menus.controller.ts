import { Controller, Get } from '@nestjs/common';
import { MenusService } from './menus.service';
import { Menu } from './menus.interface';
interface MenuResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}
@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) { }
  @Get('getMenus')
  async findAll(): Promise<MenuResponse<Menu[]>> {
    const result = await this.menusService.getMenus();
    return {
      code: 200,
      message: '',
      data: result,
    };
  }
}
