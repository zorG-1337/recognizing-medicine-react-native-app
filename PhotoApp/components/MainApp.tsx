import { CameraType, CameraView, PermissionResponse } from "expo-camera";
import { Button, StyleSheet, Text, View } from "react-native";
import { MainView } from "./MainView";
import { MedicineType, MessageType } from "../types";

interface MainAppProps {
    permission: PermissionResponse | null
    medicine: MessageType | MedicineType | null
    cameraRef: React.RefObject<CameraView>
    facing: CameraType
    startScreen: boolean
    requestPermission: () => Promise<PermissionResponse>
    setMedicine: React.Dispatch<React.SetStateAction<MedicineType | MessageType | null>>
    setFacing: React.Dispatch<React.SetStateAction<CameraType>>
    setStartScreen: React.Dispatch<React.SetStateAction<boolean>>
}

export function MainApp({ permission, medicine, cameraRef, startScreen, facing, requestPermission, setMedicine, setFacing, setStartScreen}: MainAppProps) {
    return (
        <View style={styles.container}>
            {!permission ? (
                <View />
            ) : !permission.granted ? (
                <View style={styles.container}>
                    <Text style={styles.message}>We need your permission to show the camera</Text>
                    <Button onPress={requestPermission} title="grant permission" />
                </View> 
            ) : 
            <MainView 
                medicine={medicine} 
                cameraRef={cameraRef} 
                facing={facing} 
                startScreen={startScreen} 
                setFacing={setFacing} 
                setMedicine={setMedicine} 
                setStartScreen={setStartScreen}
        />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    }
  })