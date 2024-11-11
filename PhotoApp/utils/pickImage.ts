import * as ImagePicker from 'expo-image-picker';
import { sendRecognizeText } from '../services/sendRecognizeText.service';
import { MedicineType, MessageType } from '../types';
import { copyFile } from './copyFile';
import { Languages } from '../components';

export const pickImage = async (setMedicine: React.Dispatch<React.SetStateAction<MedicineType | MessageType | null>>, language: Languages) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Только изображения
        allowsEditing: true, // Разрешить редактирование
        quality: 1, // Качество от 0 до 1
      });
      if(result.assets?.length) {
        const newUri = await copyFile(result.assets[0].uri);
        if(newUri) {
          await sendRecognizeText(newUri, setMedicine, language)
        }
      }
    } catch (E) {
      console.log(E);
    }
  };