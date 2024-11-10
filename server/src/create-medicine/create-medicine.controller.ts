import { Body, Controller, Post } from '@nestjs/common';
import { CreateMedicineService } from './create-medicine.service';
import { CreateMedicine } from './dto/createMedicine.dto';
import { FindMedicine } from './dto/findMedicine.dto';

@Controller('create-medicine')
export class CreateMedicineController {
  constructor(private readonly createMedicineService: CreateMedicineService) {}

  @Post()
  async createMedicine(@Body() dto: CreateMedicine) {
    return this.createMedicineService.createMedicine(dto)
  }

  @Post('find-by-name') 
  async findMedicineByName(@Body() dto: FindMedicine) {
    return this.createMedicineService.findMedicineByName(dto)
  }

}
