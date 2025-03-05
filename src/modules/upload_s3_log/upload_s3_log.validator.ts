import { plainToInstance } from 'class-transformer';
import { BaseValidator } from 'src/common/validator/base.validator';
import { IValidator } from 'src/common/validator/interface.validator';
import { UploadS3LogDto } from './upload_s3_log.dto';

export class UploadS3LogValidator extends BaseValidator implements IValidator {
  validate(data: any): Promise<this> {
    const dados = plainToInstance(UploadS3LogDto, data);
    return this.validator(dados);
  }
}
