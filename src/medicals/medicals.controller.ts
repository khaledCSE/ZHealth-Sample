import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateMedicalDto, UpdateMediclDto } from './dtos/medical.dto';
import { iMedical } from './interfaces/medical.interface';
import { MedicalsService } from './medicals.service';

@Controller('medicals')
@ApiTags('Medical')
export class MedicalsController {
  constructor(private readonly medicalService: MedicalsService) {}

  @Get()
  listAll(): Promise<iMedical[]> {
    return this.medicalService.listAll();
  }

  @Post()
  createOne(@Body() medinfo: CreateMedicalDto): Promise<iMedical> {
    return this.medicalService.createOne(medinfo);
  }

  @Get('/:id')
  @ApiParam({ name: 'id', example: '615dc9503238040d494685c8' })
  getOne(@Param('id') medId: string): Promise<iMedical> {
    return this.medicalService.getOne(medId);
  }

  @Patch('/:id')
  @ApiParam({ name: 'id', example: '615dc9503238040d494685c8' })
  updateOne(
    @Body() medInfo: UpdateMediclDto,
    @Param('id') medid: string,
  ): Promise<iMedical> {
    return this.medicalService.updateOne(medid, medInfo);
  }

  @Delete('/:id')
  @ApiParam({ name: 'id', example: '615dc9503238040d494685c8' })
  deleteOne(@Param('id') medId: string): Promise<iMedical> {
    return this.medicalService.deleteOne(medId);
  }

  @Get('seed')
  seed(): Promise<iMedical[]> {
    return this.medicalService.seed();
  }
}
