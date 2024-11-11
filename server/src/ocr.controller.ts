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
  async recognizeText(@UploadedFile() file: Express.Multer.File, @Body('language') language: string) {

    return this.ocrService.saveImage(file.buffer, language)
  }
}


