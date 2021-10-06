import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMedicalDto {
  @IsString()
  @ApiProperty({ example: 'Random Name' })
  name: string;
}

export class UpdateMediclDto {
  @IsString()
  @ApiPropertyOptional({ example: 'Random Name' })
  name?: string;
}
