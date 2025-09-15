import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ImovelsService, Imovel } from './Imovel.service';

@Controller('Imovel')
export class ImovelsController {
  constructor(private readonly ImovelsService: ImovelsService) {}

  @Post()
  create(@Body() createImovelDto: Partial<Imovel>) {
    return this.ImovelsService.create(createImovelDto);
  }

  @Get()
  findAll() {
    return this.ImovelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ImovelsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateImovelDto: Partial<Imovel>) {
    return this.ImovelsService.update(Number(id), updateImovelDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.ImovelsService.delete(Number(id));
  }
}
