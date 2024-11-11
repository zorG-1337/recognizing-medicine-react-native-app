// ocr.service.ts
import { Injectable } from '@nestjs/common';
import * as Tesseract from 'tesseract.js';
import * as fs from 'fs';
import * as path from 'path';
import * as sharp from 'sharp';
import { CreateMedicineService } from './create-medicine/create-medicine.service';

type Medicine = {
    name: string
    manufacturer?: string
    contraindications: string
}

type ErrorMedicine = {
  message: string
  formattedName: string
}

@Injectable()
export class OcrService {

  public constructor(private createMedicineService: CreateMedicineService) {}

  async recognizeTextFromImage(imagePath: string, language: string): Promise<Medicine | ErrorMedicine> {
    try {
      const result = await Tesseract.recognize(
        imagePath,
        language // Язык для распознавания (можно указать другие языки)
      );
      const formattedName = {name: result.data.text.replace(/[^a-zA-Z]/g, '')}
      console.log(formattedName)

      const result_db = await this.createMedicineService.findMedicineByName(formattedName)

      if(result_db) {
        return result_db
      }

      return {
        message: "Ошибка. Препарат не найден в базе данных.",
        formattedName: formattedName.name
      }

    } catch (error) {
      console.error('Ошибка распознавания', error);
      throw new Error('Ошибка во время распознавания');
    }
  }

  // Пример метода для получения пути к изображению
  async saveImage(imageBuffer: Buffer, language: string): Promise<Medicine | ErrorMedicine> {
    const addedNumber = Math.random() * (0.2 - 0.1) + 0.1
    const filePath = path.join(__dirname, '..', 'uploads', `image${addedNumber}.jpg`);
    const outputPath = path.join(__dirname, '..', 'uploads', `enhanced_image${addedNumber}.jpeg`);
    fs.writeFileSync(filePath, imageBuffer);

    try {
      await sharp(filePath)
      .toFormat('jpeg', { quality: 100 })
      .resize({ width: 1200 })
      .median(3) // Применение медианного фильтра с размером ядра 3
      .sharpen()
      .linear(1.2, -50)
      .threshold(128)
      .toFile(outputPath);
    } catch (error) {
      console.error('Ошибка при обработке изображения:', error);
      throw error;
    }

    return this.recognizeTextFromImage(outputPath, language)
  }


}
