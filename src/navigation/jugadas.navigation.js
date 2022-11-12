import Jugadas from "../screens/jugadas";
import React from "react";
import colors from "../constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const JugadasNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Jugadas"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.tertiary
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    fontFamily: 'Raleway-Bold',
                },
            }}
        >
            <Stack.Screen
                name="Jugadas"
                component={Jugadas}
            />
        </Stack.Navigator>
    )
}

export default JugadasNavigator;