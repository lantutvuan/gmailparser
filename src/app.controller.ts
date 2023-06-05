import { Controller, Get } from '@nestjs/common';
import { GmailService } from './app.service';

@Controller('oauth2callback')
export class AppController {
  constructor(private readonly appService: GmailService) {}

  @Get()
  getHello() {
    console.log('callback');
  }
}
