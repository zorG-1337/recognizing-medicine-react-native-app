import { StyleSheet, View } from "react-native";
import { Camera } from "./Camera";
import { CameraType, CameraView } from "expo-camera";
import { Languages, MedicineType, MessageType } from "../types";
import { MedicineInfoScreen } from "./MedicineInfoScreen";
import { NotFoundMedicineScreen } from "./NotFoundMedicineScreen";
import { StartScreen } from "./StartScreen";

interface MainViewProps {
    medicine: MessageType | MedicineType | null
    cameraRef: React.RefObject<CameraView>
    facing: CameraType
    startScreen: boolean
    language: Languages
    setMedicine: React.Dispatch<React.SetStateAction<MedicineType | MessageType | null>>
    setFacing: React.Dispatch<React.SetStateAction<CameraType>>
    setStartScreen: React.Dispatch<React.SetStateAction<boolean>>
    setLanguage: React.Dispatch<React.SetStateAction<Languages>>
}

export function MainView({ medicine, cameraRef, startScreen, facing, language, setMedicine, setFacing, setStartScreen, setLanguage }: MainViewProps) {
    return (
    <View style={styles.container}>
        {medicine && 'name' in medicine &&  (
            <MedicineInfoScreen medicine={medicine} setMedicine={setMedicine}/>
        )}

        {medicine && 'message' in medicine &&  (
            <NotFoundMedicineScreen medicine={medicine} setMedicine={setMedicine}/>
        )}
        {
        startScreen && (
            <StartScreen setStartScreen={setStartScreen}/>
        )
        }
        <Camera 
            cameraRef={cameraRef} 
            facing={facing} 
            language={language}
            setFacing={setFacing} 
            setMedicine={setMedicine}
            setLanguage={setLanguage}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})