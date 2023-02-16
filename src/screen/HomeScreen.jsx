import { Button, View } from "react-native"
import { styles } from "../lib/styles";
import { Searchbar, Text } from 'react-native-paper';
import { Image } from "react-native-web";




export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: require("../../assets/steam4.png") }}
                style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 50 }}
                resizeMode="contain"></Image>

            <Text variant="headlineSmall"> Olá, seja bem-vindo </Text>

            <Searchbar
                placeholder="Pesquisar Jogo"
            />

    
            <Button title='Crie sua conta'
                onPress={() => navigation.navigate("Formulario")}></Button>

        </View>


    );
};