import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GmailService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [GmailService],
})
export class AppModule {}
