import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OcrService } from './ocr.service';
import * as tesseract from 'tesseract.js';
import * as path from 'path';
import { CreateMedicineService } from './create-medicine/create-medicine.service';

@Controller('ocr')
export class OcrController {
  constructor(private readonly ocrService: OcrService, private readonly createMedicineService: CreateMedicineService) {}

  @Post('recognize-text')
  @UseInterceptors(FileInterceptor('file'))
  async recognizeText(@UploadedFile() file: Express.Multer.File) {
    const result = await this.ocrService.saveImage(file.buffer)

    const formattedName = {name: result.replace(/[^a-zA-Z]/g, '')}
    console.log(formattedName)

    const result_db = await this.createMedicineService.findMedicineByName(formattedName)

    if(result_db) {
      return result_db
    }

    return {
      message: "Ошибка. Препарат не найден в базе данных.",
      formattedName: formattedName.name
    }

  }

  @Post('test')
  test(@Body() data: any) {
    console.log(data)
    return {
      'jopa': 'zadnica'
    }
  }
}


