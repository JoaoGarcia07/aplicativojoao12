import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screen/HomeScreen";
import { FormularioScreen } from "../screen/FormularioScreen";


const Stack = createNativeStackNavigator()
export const RootNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'Formulario'} component={FormularioScreen} />
        </Stack.Navigator>
    );
};