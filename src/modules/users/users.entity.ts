import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number;

  @Column({ name: 'login' })
  login: string;

  @Column({ name: 'senha' })
  senha: string;

  @Column({ name: 'data_criacao' })
  data_criacao: Date;
}
