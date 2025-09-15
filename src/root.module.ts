import { Module } from '@nestjs/common';
import { RootController } from './root.controller';
import { RootService } from './root.service';
import { ImovelModule } from './Imovel/Imovel.module';
import { ItemsModule } from './items/items.module';
import { descricaoModule } from './descricao/descricao.module';

@Module({
  imports: [ImovelModule, ItemsModule, descricaoModule],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
