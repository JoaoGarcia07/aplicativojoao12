import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screen/HomeScreen";
import { SobreScreen } from "../screen/SobreScreen";
import { HelpScreen } from "../screen/HelpScreen";
import { ConfigScreen } from "../screen/ConfigScreen";

const Stack = createNativeStackNavigator()
export const RootNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'Sobre'} component={SobreScreen} />
            <Stack.Screen name={'Help'} component={HelpScreen} />
            <Stack.Screen name={'Config'} component={ConfigScreen} />
        </Stack.Navigator>
    );
};