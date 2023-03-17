import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TestDocument = HydratedDocument<Test>;

@Schema({ collection: 'test' })
export class Test {
  @Prop({ required: true, type: Number })
  owner: number;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  company: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
