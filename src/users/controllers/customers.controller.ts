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

import { CustomersService } from './../services/customers.service';

import { ParseIntPipe } from './../../common/parse-int.pipe';
import { CreateCustomerDto, UpdateCustomerDto } from './../dtos/customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get('/filter')
  getCustomerFilter(): string {
    return 'Yo soy un Filter';
  }

  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.customersService.findAll();
  }

  @Get(':customerId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.findOne(customerId);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    this.customersService.create(payload);
  }

  @Put(':customerId')
  update(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    this.customersService.update(customerId, payload);
  }

  @Delete(':customerId')
  delete(@Param('customerId', ParseIntPipe) customerId: number) {
    this.customersService.remove(customerId);
  }
}
