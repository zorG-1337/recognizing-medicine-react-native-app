import { CameraType, CameraView } from "expo-camera";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { pickImage, takePicture } from "../utils";
import { Languages, MedicineType, MessageType } from "../types";
import { useLanguage } from "../hooks";

interface CameraProps {
    cameraRef: React.RefObject<CameraView>
    facing: CameraType
    language: Languages
    setMedicine: React.Dispatch<React.SetStateAction<MedicineType | MessageType | null>>
    setFacing: React.Dispatch<React.SetStateAction<CameraType>>
    setLanguage: React.Dispatch<React.SetStateAction<Languages>>
}

export function Camera({ cameraRef, facing, language, setMedicine, setFacing, setLanguage }: CameraProps) {

    return (
        <CameraView style={styles.camera} ref={cameraRef} facing={facing}>
        <View style={styles.wrapper}>
            <View style={styles.switcher}>
              <Pressable onPress={() => setLanguage(language === Languages.English ? Languages.Russian : Languages.English)}>
                  <View style={language === Languages.Russian ? styles.round_active : styles.round_inactive}><Text style={styles.ruseng}>{language === Languages.Russian ? 'rus' : 'eng'}</Text></View>
              </Pressable>         
            </View>
            <Pressable>
                  <View style={styles.question}>
                    <FontAwesome name="question" style={{color: 'orange'}} size={30}/>
                  </View>
            </Pressable> 
        </View>
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
          <TouchableOpacity style={styles.button} onPress={() => pickImage(setMedicine, language)}>
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
        flex: 1,
        display: 'flex'
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
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 340,
      height: 100,
      marginTop: 40
    },
    switcher: {
      width: 60,
      height: 30,
      borderColor: 'black',
      borderWidth: 1,
      marginLeft: 10,
      borderRadius: 30,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#e0e0e0'
    },
    round_active: {
      width: 25,
      height: 25,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 50,
      marginLeft: 30,
      backgroundColor: 'orange'
    },
    round_inactive: {
      width: 25,
      height: 25,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 50,
      marginLeft: 3,
      backgroundColor: 'orange'
    },
    ruseng: {
      textAlign: 'center',
    },
    question: {
      width: 40,
      height: 40,
      borderWidth: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: '#e0e0e0'
    }
})