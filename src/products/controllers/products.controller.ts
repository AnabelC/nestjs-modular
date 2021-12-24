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
  // Res,
  // ParseIntPipe,
} from '@nestjs/common';

// import { Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ProductsService } from './../services/products.service';

import { ParseIntPipe } from './../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('/filter')
  getProductFilter(): string {
    return 'Yo soy un Filter';
  }
  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `products: limit => ${limit} y offset =${offset}`;
  // }

  @Get('')
  @ApiOperation({ summary: 'List of products' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit => ${limit}, offset => ${offset} y brand => ${brand}`,
    // };
    return this.productsService.findAll();
  }

  // @Get('/:productId')
  // getOne(@Param() params: any): string {
  //   return `product ${params.productId}`;
  // }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // Forma de express
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion para crear',
    //   payload,
    // };
    this.productsService.create(payload);
  }

  @Put(':productId')
  update(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() payload: UpdateProductDto,
  ) {
    // return {
    //   productId,
    //   payload,
    // };
    this.productsService.update(productId, payload);
  }

  @Delete(':productId')
  delete(@Param('productId', ParseIntPipe) productId: number) {
    this.productsService.remove(productId);
  }
}
