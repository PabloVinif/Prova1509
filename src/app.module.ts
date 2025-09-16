import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Imovel } from './imovel/imovel.entity';
import { Comodo } from './comodo/comodo.entity';
import { ImovelModule } from './imovel/imovel.module';
import { ComodoModule } from './comodo/comodo.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: '123456', 
      database: 'postgres',
      entities: [Imovel, Comodo],
      synchronize: true,
    }),
    ImovelModule,
    ComodoModule,
  ],
})
export class AppModule {}
