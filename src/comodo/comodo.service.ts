import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comodo } from './comodo.entity';
import { Imovel } from '../imovel/imovel.entity';

@Injectable()
export class ComodoService {
  constructor(
    @InjectRepository(Comodo)
    private comodoRepo: Repository<Comodo>,
    @InjectRepository(Imovel)
    private imovelRepo: Repository<Imovel>,
  ) {}

  async create(imovelId: number, comodoData: Partial<Comodo>) {
    const imovel = await this.imovelRepo.findOne({ where: { id: imovelId } });
    if (!imovel) {
      throw new Error('Imóvel não encontrado');
    }
    const comodo = this.comodoRepo.create(comodoData);
    comodo.imovel = imovel;
    return this.comodoRepo.save(comodo);
  }

  findAll() {
    return this.comodoRepo.find({ relations: ['imovel'] });
  }

  findOne(id: number) {
    return this.comodoRepo.findOne({ where: { id }, relations: ['imovel'] });
  }

  async update(id: number, data: Partial<Comodo>) {
    await this.comodoRepo.update(id, data);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.comodoRepo.delete(id);
  }
}
