import * as MediaLibrary from 'expo-media-library';
import { Alert } from 'react-native';

export const  savePhotoToDevice = async (uri: string) => {
    // Запрос разрешения на доступ к библиотеке
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      try {
        await MediaLibrary.saveToLibraryAsync(uri);
        // Alert.alert('Сохранение', 'Фотография успешно сохранена в галерее!'); // Показывает всплывающее окно, что фотография успешно сохранена!
      } catch (error) {
        console.error('Ошибка при сохранении фотографии:', error);
      }
    } else {
      Alert.alert('Ошибка', 'Разрешение на доступ к галерее не предоставлено');
    }
  };