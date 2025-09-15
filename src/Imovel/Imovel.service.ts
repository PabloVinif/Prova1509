import { Injectable } from '@nestjs/common';

export interface Imovel {
  id: number;
  endereco: string;
  dataCompra: number;
}

@Injectable()
export class ImovelService {
  private Imovel: Imovel[] = [];
  private idSequence = 1;

  create(Imovel: Partial<Imovel>): Imovel {
    const newImovel = { id: this.idSequence++, privilege: 'basic', ...Imovel } as Imovel;
    this.Imovel.push(newImovel);
    return newImovel;
  }

  findAll(): Imovel[] {
    return this.Imovel;
  }

  findOne(id: number): Imovel | undefined {
    return this.Imovel.find((Imovel) => Imovel.id === id);
  }

  update(id: number, updateImovel: Partial<Imovel>): Imovel | null {
    const Imovel = this.findOne(id);
    if (!Imovel) return null;

    Object.assign(Imovel, updateImovel);
    return Imovel;
  }

  delete(id: number): boolean {
    const index = this.Imovel.findIndex((Imovel) => Imovel.id === id);
    if (index === -1) return false;

    this.Imovel.splice(index, 1);
    return true;
  }
}
