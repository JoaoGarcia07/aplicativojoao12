import { Button, Text, View } from "react-native"
import { styles } from "../lib/styles";


export const ConfigScreen =({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Olá sou a página Configurações</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}
