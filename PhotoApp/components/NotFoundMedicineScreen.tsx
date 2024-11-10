import { Pressable, StyleSheet, Text, View } from "react-native";
import { MedicineType, MessageType } from "../types";

interface NotFoundMedicineScreenProps {
    medicine: MessageType
    setMedicine: React.Dispatch<React.SetStateAction<MedicineType | MessageType | null>>
}

export function NotFoundMedicineScreen({ medicine, setMedicine }: NotFoundMedicineScreenProps) {
    return (
        <View style={styles.previewContainer}>
          <Text>Препарат {medicine.formattedName} не найден.</Text>
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
      closeButton: {
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: 'orange'
      },
})