import { Module } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { ImovelController } from './imovel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Imovel } from './imovel.entity';
import { Comodo } from 'src/comodo/comodo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Imovel, Comodo]),
  ],
  providers: [ImovelService],
  controllers: [ImovelController]
})
export class ImovelModule {}
