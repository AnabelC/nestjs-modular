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

import { BrandsService } from '../services/brands.service';

import { ParseIntPipe } from './../../common/parse-int.pipe';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}
  @Get('/filter')
  getBrandFilter(): string {
    return 'Yo soy un Filter';
  }

  @Get('')
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.brandsService.findAll();
  }

  @Get(':brandId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandsService.findOne(brandId);
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    this.brandsService.create(payload);
  }

  @Put(':brandId')
  update(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() payload: UpdateBrandDto,
  ) {
    this.brandsService.update(brandId, payload);
  }

  @Delete(':brandId')
  delete(@Param('brandId', ParseIntPipe) brandId: number) {
    this.brandsService.remove(brandId);
  }
}
