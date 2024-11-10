import { Module } from '@nestjs/common';
import { CreateMedicineService } from './create-medicine.service';
import { CreateMedicineController } from './create-medicine.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CreateMedicineController],
  providers: [CreateMedicineService, PrismaService],
  exports: [CreateMedicineService]
})
export class CreateMedicineModule {}
