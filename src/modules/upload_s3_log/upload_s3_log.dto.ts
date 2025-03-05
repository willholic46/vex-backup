import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class UploadS3LogDto {
  @IsNotEmpty({ message: 'O campo ID do backup é obrigatório' })
  @IsNumber({}, { message: 'O campo ID do backup deve ser um número' })
  id_backup: number;

  @IsNotEmpty({ message: 'O campo Nome do arquivo é obrigatório' })
  @IsString({ message: 'O campo Nome do arquivo deve ser uma string' })
  nome_arquivo: string;

  @IsNotEmpty({ message: 'O campo Tamanho do arquivo é obrigatório' })
  @IsNumber({}, { message: 'O campo Tamanho do arquivo deve ser um número' })
  tamanho_arquivo: number;

  @IsNotEmpty({ message: 'O campo Caminho do arquivo é obrigatório' })
  @IsString({ message: 'O campo Caminho do arquivo deve ser uma string' })
  caminho_arquivo: string;

  @IsNotEmpty({ message: 'O campo Bucket é obrigatório' })
  @IsString({ message: 'O campo Bucket deve ser uma string' })
  bucket: string;

  @IsNotEmpty({ message: 'O campo Status do upload é obrigatório' })
  @IsNumber({}, { message: 'O campo Status do upload deve ser um número' })
  status_upload: number;

  @IsNotEmpty({ message: 'O campo Data de início é obrigatório' })
  @IsDateString(
    {},
    { message: 'O campo Data de início deve ser uma data válida' },
  )
  data_inicio: Date;

  @IsNotEmpty({ message: 'O campo Data de encerramento é obrigatório' })
  @IsDateString(
    {},
    { message: 'O campo Data de encerramento deve ser uma data válida' },
  )
  data_encerramento: Date;
}
