import { IsNotEmpty, IsInt, IsAlpha, IsAlphanumeric } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TestDto {
  @ApiProperty({ example: 12 })
  @IsNotEmpty()
  @IsInt()
  owner: number;

  @ApiProperty({ example: 'Candidate' })
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @ApiProperty({ example: 'Sunbytes' })
  @IsNotEmpty()
  @IsAlphanumeric()
  company: string;
}
