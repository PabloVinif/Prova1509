import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DescricaoModule } from '../Descricao/Descricao.module';
import { DescricaoService } from './descricao.service';
import { DescricaoController } from './descricao.controller';

@Module({
  imports: [
    DescricaoModule,
    PassportModule,
  ],
  controllers: [DescricaoController],
  providers: [DescricaoService],
  exports: [DescricaoService],
})
export class DescricaoModule {}
