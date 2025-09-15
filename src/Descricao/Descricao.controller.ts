import { Controller, Post, Body } from '@nestjs/common';
import { DescricaoService } from './Descricao.service';

@Controller('descricao')
export class DuthenticationController {
  constructor(private readonly descricaoService: DescricaoService) {}

  @Post('signin')
  async signin(@Body() credentials: { user: string; pass: string }) {
    return this.descricaoService.signin(credentials);
  }
}
