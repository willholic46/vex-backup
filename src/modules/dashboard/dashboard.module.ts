import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { UploadS3LogModule } from '../upload_s3_log/upload_s3_log.module';

@Module({
  imports: [UploadS3LogModule],
  controllers: [],
  providers: [DashboardService],
  exports: [DashboardService],
})
export class DashboardModule {}
