import { Module } from '@nestjs/common';
import { UploadS3LogController } from './upload_s3_log.controller';
import { UploadS3LogService } from './upload_s3_log.service';

@Module({
  controllers: [UploadS3LogController],
  providers: [UploadS3LogService],
  exports: [UploadS3LogService],
})
export class UploadS3LogModule {}
