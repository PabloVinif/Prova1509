import { Module } from '@nestjs/common';
import { ImovelService } from './Imovel.service';
import { ImovelController } from './Imovel.controller';

@Module({
  providers: ImovelService],
  controllers: ImovelController],
  exports: ImovelService],
})
export class ImovelModule {}
