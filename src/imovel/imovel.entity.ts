import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comodo } from '../comodo/comodo.entity';

@Entity()
export class Imovel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column({ type: 'date' })
  dataCompra: Date;

  @Column({ nullable: true })
  endereco: string;

  @OneToMany(() => Comodo, (comodo) => comodo.imovel, { cascade: true })
  comodos: Comodo[];
}
