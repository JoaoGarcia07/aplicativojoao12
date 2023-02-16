import { Button, View } from "react-native"
import { styles } from "../lib/styles"
import { TextInput, Text } from 'react-native-paper';
import { Image } from "react-native-web";


export const FormularioScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: require("../../assets/steam4.png") }}
                style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 50 }}
                resizeMode="contain"></Image>

            <Text variant="headlineSmall">Olá, Crie sua conta na Steam</Text>

            <TextInput
                mode="outlined"
                label="Nome"
                right={<TextInput.Affix text="/100" />}
            />

            <TextInput
                mode="outlined"
                label="Sobrenome"
                right={<TextInput.Affix text="/100" />}
            />

            <TextInput
                mode="outlined"
                label="Data de nascimento "
                right={<TextInput.Affix text="/100" />}
            />

            <TextInput
                label="Digite sua senha"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />

            <TextInput
                label="Confirmar senha"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />

            <Button title="volte" onPress={() => navigation.navigate("Home")}
            ></Button>
        </View>
    )
}