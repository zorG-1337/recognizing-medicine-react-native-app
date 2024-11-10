import { Pressable, StyleSheet, Text, View } from "react-native";

interface StartScreenProps {
    setStartScreen: React.Dispatch<React.SetStateAction<boolean>>
}

export function StartScreen({ setStartScreen }: StartScreenProps) {
    return (
        <View style={styles.previewContainer}>
            <Text style={styles.startText}>Здравствуйте, уважаемые пользователи. Для того, чтобы узнать противопоказания того или иного препарата, загрузите его фотографию и выберите ту область, где показано название. Чем точнее вы выделите нужную область, тем выше вероятность получения результата. Фото должно быть сделано как можно лучше</Text>
            <Pressable style={styles.closeButton} onPress={() => setStartScreen(false)}><Text>Перейти к приложению</Text></Pressable>
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
    startText: {
        textAlign: 'center',
        fontSize: 25
    },
    closeButton: {
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: 'orange'
    },
})