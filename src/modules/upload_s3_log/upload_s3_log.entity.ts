import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BackupLog } from '../backup_log/backup_log.entity';

@Entity()
export class UploadS3Log extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number;

  @Column({ name: 'id_backup' })
  id_backup: number;

  @Column({ name: 'nome_arquivo', length: 30 })
  nome_arquivo: string;

  @Column({ name: 'tamanho_arquivo', type: 'decimal' })
  tamanho_arquivo: number;

  @Column({ name: 'caminho_arquivo', length: 255 })
  caminho_arquivo: string;

  @Column({ name: 'bucket', length: 512 })
  bucket: string;

  @Column({ name: 'status_upload', type: 'tinyint' })
  status_upload: number;

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

  @ManyToOne(() => BackupLog, (backupLog) => backupLog.uploads)
  @JoinColumn({ name: 'id_backup' })
  backup: BackupLog;
}
