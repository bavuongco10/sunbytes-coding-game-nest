import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import TestDto from '@/dto/test.dto';
import { shuffle } from '@utils/shuffles.util';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('test')
  async test(@Body() body: TestDto) {
    return {
      owner: shuffle(body.owner),
      name: shuffle(body.name),
      company: shuffle(body.company),
    };
  }
}
