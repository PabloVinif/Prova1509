import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Imovel } from '../imovel/imovel.entity';

@Entity()
export class Comodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Imovel, (imovel) => imovel.comodos, { onDelete: 'CASCADE' })
  imovel: Imovel;
}
