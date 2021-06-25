import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { User } from './user.interface';
import { UserService } from './user.service';
import { CreateUserDTO } from './user.dto';

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('getUserAll')
  async findAll(): Promise<UserResponse<User[]>> {
    return {
      code: 200,
      data: await this.userService.findAll(),
      message: 'Success',
    };
  }
  @Get('getUserInfo')
  async findOne(@Query('id') id: String): Promise<UserResponse<User>> {
    return {
      code: 200,
      data: await this.userService.findOne(id),
      message: 'Success',
    };
  }
  @Post('addUser')
  async addUser(@Body() body: CreateUserDTO): Promise<UserResponse> {
    const params = {
      ...body,
      user_id: Math.floor(Math.random() * 10000),
    };
    await this.userService.addUser(params);
    return {
      code: 200,
      message: 'Success',
    };
  }
  @Get('deleteUser')
  async deleteUser(@Query('id') id: String): Promise<UserResponse<string>> {
    const result = await this.userService.deleteUser(id);
    return {
      code: 200,
      data: result,
      message: 'Success',
    };
  }
}
