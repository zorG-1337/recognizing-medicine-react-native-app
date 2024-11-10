import { CameraCapturedPicture, CameraView } from "expo-camera";
import { pickImage } from "./pickImage";
import { MedicineType, MessageType } from "../types";
import { savePhotoToDevice } from "./savePhotoToDevice";
import { copyFile } from "./copyFile";

export const takePicture = async (cameraRef: React.RefObject<CameraView>, setMedicine: React.Dispatch<React.SetStateAction<MedicineType | MessageType | null>>) => {
    if (cameraRef.current) {
      try {
        const photo: CameraCapturedPicture | undefined = await cameraRef.current.takePictureAsync();
        if (photo) {
          const newUri = await copyFile(photo.uri);

          if(newUri) {
            await savePhotoToDevice(newUri)
          }

          pickImage(setMedicine)
        }
      } catch (error) {
        console.error('Ошибка при фотографировании:', error);
      }
    }
  };