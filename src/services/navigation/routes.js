import Splash from "../../screens/Splash"
import Home from "../../screens/Home"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function AppStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = 'Splash' component={Splash}/>
            <Stack.Screen name = 'Home' component={Home}/>
        </Stack.Navigator>

    )
}