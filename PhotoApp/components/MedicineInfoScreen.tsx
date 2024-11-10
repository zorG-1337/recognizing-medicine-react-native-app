import { Pressable, StyleSheet, Text, View } from "react-native"
import { MedicineType, MessageType } from "../types"

interface MedicineInfoScreenProps {
    medicine: MedicineType
    setMedicine: React.Dispatch<React.SetStateAction<MedicineType | MessageType | null>>
}

export function MedicineInfoScreen({ medicine, setMedicine }: MedicineInfoScreenProps) {
    return (
        <View style={styles.previewContainer}>
          <Text>Название препарата: {medicine.name}</Text>
          <Text style={styles.contrText}>Противопоказания: {medicine.contraindications}</Text>
          <Pressable style={styles.closeButton} onPress={() => setMedicine(null)}><Text>Close window</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    previewContainer: {
        alignItems: 'center',
        marginTop: 20,
        height: 800,
        justifyContent: 'space-around',
        textAlign: 'center'
      },
      contrText: {
        textAlign: 'center'
      },
      closeButton: {
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: 'orange'
      },
})