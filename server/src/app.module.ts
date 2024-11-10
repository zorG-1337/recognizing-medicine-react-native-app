import { Module } from '@nestjs/common';
import { OcrModule } from './ocr.module';
import { CreateMedicineModule } from './create-medicine/create-medicine.module';


@Module({
  imports: [OcrModule, CreateMedicineModule]
})
export class AppModule {}
