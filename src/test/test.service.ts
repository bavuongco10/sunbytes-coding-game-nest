import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { shuffle } from '@utils/shuffles.util';
import { TestDto } from '@/test/dto/test.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Test, TestDocument } from '@/test/schema/test.schema';

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}

  async processTest(body: TestDto) {
    const shuffledObj = {
      owner: shuffle(body.owner),
      name: shuffle(body.name),
      company: shuffle(body.company),
    };
    const shuffledTest = new this.testModel(shuffledObj);
    await shuffledTest.save();
    return shuffledObj;
  }
}
