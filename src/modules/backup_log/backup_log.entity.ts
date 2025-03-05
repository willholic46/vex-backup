import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UploadS3Log } from '../upload_s3_log/upload_s3_log.entity';

@Entity()
export class BackupLog extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number;

  @Column({ name: 'hostname', length: 100 })
  hostname: string;

  @Column({ name: 'nome_database', length: 1024 })
  nome_database: string;

  @Column({ name: 'nome_arquivo', length: 26 })
  nome_arquivo: string;

  @Column({ name: 'tamanho_arquivo', type: 'decimal' })
  tamanho_arquivo: number;

  @Column({ name: 'status_backup', type: 'tinyint' })
  status_backup: number;

  @Column({ name: 'versao_servidor', length: 50 })
  versao_servidor: string;

  @Column({ name: 'observacao', length: 1024, nullable: true })
  observacao: string;

  @Column({ name: 'data_inicio', type: 'datetime' })
  data_inicio: Date;

  @Column({ name: 'data_encerramento', type: 'datetime' })
  data_encerramento: Date;

  @Column({
    name: 'data_criacao',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  data_criacao: Date;

  @OneToMany(() => UploadS3Log, (uploadS3Log) => uploadS3Log.backup)
  uploads: UploadS3Log[];
}
