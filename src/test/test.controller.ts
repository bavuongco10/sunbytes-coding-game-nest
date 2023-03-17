import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TestDto } from './dto/test.dto';
import { TestService } from '@/test/test.service';

@ApiTags('test')
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  async test(@Body() body: TestDto) {
    return this.testService.processTest(body);
  }
}
