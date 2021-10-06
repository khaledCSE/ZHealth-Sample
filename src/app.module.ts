import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalsModule } from './medicals/medicals.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/zhealth'),
    MedicalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
