import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { MedicalEntity } from './entities/medicals.entities';
import { iMedical, iMedicalUpdate } from './interfaces/medical.interface';
import { medicalList } from './seeds/medical.seed';

@Injectable()
export class MedicalsService {
  constructor(
    @InjectModel(MedicalEntity)
    private readonly medicalModel: ReturnModelType<typeof MedicalEntity>,
  ) {}

  async listAll(): Promise<iMedical[]> {
    const all_med = await this.medicalModel.find();
    return all_med;
  }

  async createOne(medInfo: iMedical): Promise<iMedical> {
    const new_med = await new this.medicalModel(medInfo);
    const saved = await new_med.save();
    return saved;
  }

  async getOne(medId: string): Promise<iMedical> {
    const med = await this.medicalModel.findById(medId);
    return med;
  }

  async updateOne(medId: string, medInfo: iMedicalUpdate): Promise<iMedical> {
    const updated = await this.medicalModel.findByIdAndUpdate(medId, medInfo);
    return updated;
  }

  async deleteOne(medId: string): Promise<iMedical> {
    const deleted = await this.medicalModel.findByIdAndRemove(medId);
    return deleted;
  }

  async seed(): Promise<iMedical[]> {
    const meds = medicalList.map((m) => ({ name: m }));
    const all_med = await this.medicalModel.insertMany(meds);
    return all_med;
  }
}
