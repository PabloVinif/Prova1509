import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { ComodoService } from './comodo.service';
import { Comodo } from './comodo.entity';

@Controller('comodo')
export class ComodoController {
  constructor(private readonly comodoService: ComodoService) {}

  @Post('imovel/:imovelId')
  create(@Param('imovelId') imovelId: number, @Body() data: Partial<Comodo>) {
    return this.comodoService.create(imovelId, data);
  }

  @Get()
  findAll() {
    return this.comodoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.comodoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Partial<Comodo>) {
    return this.comodoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.comodoService.remove(id);
  }
}
