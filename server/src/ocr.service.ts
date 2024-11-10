// ocr.service.ts
import { Injectable } from '@nestjs/common';
import * as Tesseract from 'tesseract.js';
import * as fs from 'fs';
import * as path from 'path';
import * as sharp from 'sharp';

@Injectable()
export class OcrService {
  async recognizeTextFromImage(imagePath: string): Promise<string> {
    try {
      const result = await Tesseract.recognize(
        imagePath,
        'eng' // Язык для распознавания (можно указать другие языки)

      );
      return result.data.text; // Вернет распознанный текст
    } catch (error) {
      console.error('Ошибка распознавания', error);
      throw new Error('Ошибка во время распознавания');
    }
  }

  // Пример метода для получения пути к изображению
  async saveImage(imageBuffer: Buffer): Promise<string> {
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

    return this.recognizeTextFromImage(outputPath)
  }


}
