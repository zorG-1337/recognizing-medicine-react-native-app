import * as FileSystem from 'expo-file-system';

// копируем файл в доступное место
export const copyFile = async (uri: string) => {
    const newUri = FileSystem.documentDirectory + 'my_image.jpg'; // Путь к новому месту
    try {
      await FileSystem.copyAsync({ from: uri, to: newUri });
      return newUri;
    } catch (error) {
      console.error('Ошибка копирования файла:', error);
    }
}