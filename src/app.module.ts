import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { UploadS3LogModule } from './modules/upload_s3_log/upload_s3_log.module';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UsersModule, UploadS3LogModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
