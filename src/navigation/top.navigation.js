import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Top from "../screens/top";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

const TopNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Top"
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
                name="Mejores"
                component={Top}
            />
        </Stack.Navigator>
    )
}

export default TopNavigator;