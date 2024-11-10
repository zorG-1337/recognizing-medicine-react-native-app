import { Module } from '@nestjs/common';
import { OcrService } from './ocr.service';
import { OcrController } from './ocr.controller';
import { CreateMedicineService } from './create-medicine/create-medicine.service';
import { CreateMedicineModule } from './create-medicine/create-medicine.module';


@Module({
  imports: [CreateMedicineModule],
  controllers: [OcrController],
  providers: [OcrService]
})
export class OcrModule {}
