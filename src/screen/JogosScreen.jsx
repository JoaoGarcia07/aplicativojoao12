import { View, Button } from "react-native-web"
import { styles } from "../lib/styles"
import { Image } from "react-native-web"
import { Text } from "react-native-paper"


export const JogosScreen = ({ navigation }) => {
    return (
        <View style={styles.jogos}>
            <View>
            <Image
                source={{ uri: require("../../assets/forza.jpg") }}
                style={{ width: 400, height: 400, marginBottom: 20, borderRadius: 50 }}
                resizeMode="contain">
            </Image>
            <Text variant="TitleMedium">Forza Horizon 5 é um jogo eletrônico de corrida desenvolvido pela Playground Games e publicado pela Xbox Game Studios. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México. </Text>
            </View>
            <Image
                source={{ uri: require("../../assets/fifa.png") }}
                style={{ width: 400, height: 400, marginBottom: 20, borderRadius: 50 }}
                resizeMode="contain">
            </Image>

            <Button title="volte" onPress={() => navigation.navigate("Home")}></Button>
        </View>
    )
}