import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  @Get('/filter')
  getOrderFilter(): string {
    return 'Yo soy un Filter';
  }

  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `orders: limit => ${limit} y offset => ${offset}`,
    };
  }

  @Get('/:orderId')
  getOne(@Param('orderId') orderId: string): string {
    return `Order ${orderId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion para crear Order',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'Eliminar order',
      id,
    };
  }
}
