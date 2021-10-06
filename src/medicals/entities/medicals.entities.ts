import { modelOptions, Prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'medicals' } })
export class MedicalEntity {
  @IsString()
  @Prop({ required: true })
  name: string;
}
