import { Languages } from "../components";
import { MedicineType, MessageType } from "../types";

export async function sendRecognizeText(newUri: string, setMedicine: React.Dispatch<React.SetStateAction<MedicineType | MessageType | null>>, language: Languages): Promise<void> {
    const fd = new FormData() as any
          fd.append('file', {
            uri: newUri,
            name: 'image.png', // Изменим расширение на .png
            type: 'image/png',  // Укажем MIME-тип для PNG
          });

          console.log(typeof language)

          fd.append('language', language)

          const response = await fetch('http://192.168.0.101:6000/ocr/recognize-text', {
            method: 'POST',
            body: fd
          })

          setMedicine(await response.json())
}