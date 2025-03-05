import { Injectable } from '@nestjs/common';
import { UploadS3Log } from './upload_s3_log.entity';
import { BackupLog } from '../backup_log/backup_log.entity';

@Injectable()
export class UploadS3LogService {
  async getAll() {
    return await UploadS3Log.find({
      relations: ['backup'],
      order: {
        id: 'DESC',
      },
    });
  }

  async create(data: any) {
    let uploadLog = UploadS3Log.create({ ...data });

    if (!uploadLog.data_criacao) {
      uploadLog.data_criacao = new Date();
    }

    return await uploadLog.save();
  }

  async findOne(id: number) {
    return await UploadS3Log.findOne({
      where: { id },
      relations: ['backup'],
    });
  }

  async findByBackupId(idBackup: number) {
    return await UploadS3Log.find({
      where: { id_backup: idBackup },
      relations: ['backup'],
    });
  }

  async getBackupDetails(idBackup: number) {
    const backup = await BackupLog.findOne({
      where: { id: idBackup },
    });

    const uploads = await UploadS3Log.find({
      where: { id_backup: idBackup },
      relations: ['backup'],
    });

    return {
      backup,
      uploads,
    };
  }
}
