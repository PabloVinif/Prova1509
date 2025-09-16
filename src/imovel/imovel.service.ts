import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Imovel } from './imovel.entity';
import { Comodo } from '../comodo/comodo.entity';

@Injectable()
export class ImovelService {
  constructor(
    @InjectRepository(Imovel)
    private imovelRepo: Repository<Imovel>,
    @InjectRepository(Comodo)
    private comodoRepo: Repository<Comodo>,
  ) {}

  create(imovel: Partial<Imovel>) {
    return this.imovelRepo.save(imovel);
  }

  findAll() {
    return this.imovelRepo.find({ relations: ['comodos'] });
  }

  addComodo(imovelId: number, comodoData: Partial<Comodo>) {
    return this.imovelRepo.findOne({ where: { id: imovelId }, relations: ['comodos'] })
      .then(imovel => {
        const comodo = this.comodoRepo.create(comodoData);
        comodo.imovel = imovel!;
        return this.comodoRepo.save(comodo);
      });
  }

  removeComodo(comodoId: number) {
    return this.comodoRepo.delete(comodoId);
  }
}
