import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { Imovel } from './imovel.entity';
import { Comodo } from '../comodo/comodo.entity';

@Controller('imovel')
export class ImovelController {
  constructor(private readonly imovelService: ImovelService) {}

  @Post('create')
  create(@Body() imovelData: Partial<Imovel>) {
    return this.imovelService.create(imovelData);
  }

  @Get()
  findAll() {
    return this.imovelService.findAll();
  }

  @Post(':id/comodo')
  addComodo(
    @Param('id') imovelId: number,
    @Body() comodoData: Partial<Comodo>,
  ) {
    return this.imovelService.addComodo(imovelId, comodoData);
  }

  @Delete('comodo/:comodoId')
  removeComodo(@Param('comodoId') comodoId: number) {
    return this.imovelService.removeComodo(comodoId);
  }
}
