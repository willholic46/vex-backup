import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UploadS3LogService } from './upload_s3_log.service';

@Controller('backups')
export class UploadS3LogController {
  constructor(private readonly uploadS3LogService: UploadS3LogService) {}

  @Get()
  @Render('upload_s3_log/index')
  async index() {
    const logs = await this.uploadS3LogService.getAll().then((logs) => {
      return logs.map((log) => {
        return {
          id: log.id,
          hostname: log.backup?.hostname || 'N/A',
          nome_arquivo: log.nome_arquivo,
          tamanho_arquivo: log.tamanho_arquivo,
          caminho_arquivo: log.caminho_arquivo,
          bucket: log.bucket,
          status_backup: log.backup?.status_backup || 0,
          status_backup_texto: this.getStatusTexto(
            log.backup?.status_backup || 0,
          ),
          status_upload: log.status_upload,
          status_upload_texto: this.getStatusTexto(log.status_upload),
          data_inicio: this.formatarDataHora(log.data_inicio),
          data_encerramento: this.formatarDataHora(log.data_encerramento),
          data_criacao: this.formatarData(log.data_criacao),
          id_backup: log.id_backup,
        };
      });
    });

    return {
      logs,
    };
  }

  @Get('/create')
  @Render('upload_s3_log/create')
  create() {
    return { title: 'Registrar Upload para S3' };
  }

  @Post('/create')
  async createUploadS3Log(@Body() uploadData, @Res() res: Response) {
    await this.uploadS3LogService
      .create(uploadData)
      .then(() => {
        return res.redirect('/upload-s3-log');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  @Get('/backup/:id')
  @Render('upload_s3_log/backup_logs')
  async getByBackup(@Param('id') id: number) {
    const detalhes = await this.uploadS3LogService.getBackupDetails(id);

    if (!detalhes.backup) {
      return {
        error: 'Backup não encontrado',
        id_backup: id,
      };
    }

    const backup = detalhes.backup;
    const upload = detalhes.uploads.length > 0 ? detalhes.uploads[0] : null;

    const backupDuracao = this.calcularDuracao(
      backup.data_inicio,
      backup.data_encerramento,
    );
    let uploadDuracao = '';

    if (upload) {
      uploadDuracao = this.calcularDuracao(
        upload.data_inicio,
        upload.data_encerramento,
      );
    }

    return {
      id_backup: id,
      backup: {
        hostname: backup.hostname,
        banco_dados: backup.nome_database,
        tamanho: backup.tamanho_arquivo,
        data_inicio: this.formatarDataHora(backup.data_inicio),
        data_encerramento: this.formatarDataHora(backup.data_encerramento),
        duracao: backupDuracao,
        status: backup.status_backup,
        status_texto: this.getStatusTexto(backup.status_backup),
        observacao: backup.observacao || '',
      },
      upload: upload
        ? {
            arquivo: upload.nome_arquivo,
            tamanho: upload.tamanho_arquivo,
            caminho: upload.caminho_arquivo,
            bucket: upload.bucket,
            data_inicio: this.formatarDataHora(upload.data_inicio),
            data_encerramento: this.formatarDataHora(upload.data_encerramento),
            duracao: uploadDuracao,
            status: upload.status_upload,
            status_texto: this.getStatusTexto(upload.status_upload),
          }
        : null,
    };
  }

  private getStatusTexto(status: number): string {
    switch (status) {
      case 1:
        return 'Sucesso';
      case 2:
        return 'Aviso';
      case 3:
        return 'Erro';
      default:
        return 'Desconhecido';
    }
  }

  private formatarData(data: Date): string {
    if (!data) return '';
    return data.toLocaleDateString('pt-BR');
  }

  private formatarDataHora(data: Date): string {
    if (!data) return '';
    return (
      data.toLocaleDateString('pt-BR') +
      ' ' +
      data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    );
  }

  private calcularDuracao(dataInicio: Date, dataFim: Date): string {
    if (!dataInicio || !dataFim) return '';

    const diferencaMs = dataFim.getTime() - dataInicio.getTime();
    const segundos = Math.floor(diferencaMs / 1000);

    if (segundos < 60) {
      return `${segundos} segundos`;
    }

    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    if (minutos < 60) {
      if (segundosRestantes === 0) {
        return `${minutos} minutos`;
      }
      return `${minutos} minutos e ${segundosRestantes} segundos`;
    }

    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    if (minutosRestantes === 0) {
      return `${horas} horas`;
    }
    return `${horas} horas e ${minutosRestantes} minutos`;
  }
}
