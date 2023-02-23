
import { HomeScreen } from "../screen/HomeScreen";
import { FormularioScreen } from "../screen/FormularioScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { JogosScreen } from "../screen/JogosScreen";


const Stack = createBottomTabNavigator()
export const RootNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'Formulario'} component={FormularioScreen} />
            <Stack.Screen name={'Jogos'} component={JogosScreen}/>
        </Stack.Navigator>
    );
};