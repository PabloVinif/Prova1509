import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComodoService } from './comodo.service';
import { ComodoController } from './comodo.controller';
import { Comodo } from './comodo.entity';
import { Imovel } from '../imovel/imovel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comodo, Imovel]),
  ],
  providers: [ComodoService],
  controllers: [ComodoController],
  exports: [ComodoService],
})
export class ComodoModule {}
