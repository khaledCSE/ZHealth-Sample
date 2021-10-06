import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { MedicalEntity } from './entities/medicals.entities';
import { MedicalsController } from './medicals.controller';
import { MedicalsService } from './medicals.service';

@Module({
  imports: [TypegooseModule.forFeature([MedicalEntity])],
  controllers: [MedicalsController],
  providers: [MedicalsService],
})
export class MedicalsModule {}
