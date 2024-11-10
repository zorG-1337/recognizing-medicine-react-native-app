import { CameraType, CameraView } from "expo-camera";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { pickImage, takePicture } from "../utils";
import { MedicineType, MessageType } from "../types";

interface CameraProps {
    cameraRef: React.RefObject<CameraView>
    facing: CameraType
    setMedicine: React.Dispatch<React.SetStateAction<MedicineType | MessageType | null>>
    setFacing: React.Dispatch<React.SetStateAction<CameraType>>
}

export function Camera({ cameraRef, facing, setMedicine, setFacing }: CameraProps) {
    return (
        <CameraView style={styles.camera} ref={cameraRef} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setFacing((current) => (current === 'back' ? 'front' : 'back'))}>
            <Text style={styles.text}> <FontAwesome name="refresh" size={40} color="white" /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => takePicture(cameraRef, setMedicine)}>
            <View style={styles.outside_circle}>
              <View style={styles.inside_circle}>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => pickImage(setMedicine)}>
            <Text style={styles.text}><FontAwesome name="folder" size={40} color="orange" /></Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    )
}

const styles = StyleSheet.create({
    inside_circle: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 50, 
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    camera: {
        flex: 1
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 80,
        marginRight: 5
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginBottom: 20,
    },
    outside_circle: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
})