import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './../services/users.service';

import { ParseIntPipe } from './../../common/parse-int.pipe';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/filter')
  getUserFilter(): string {
    return 'Yo soy un Filter';
  }

  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.usersService.findAll();
  }

  @Get(':userId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOne(userId);
  }

  @Get(':userId/orders')
  @HttpCode(HttpStatus.ACCEPTED)
  getOrders(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.getOrdersByUser(userId);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put(':userId')
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.usersService.update(userId, payload);
  }

  @Delete(':userId')
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.remove(userId);
  }
}
