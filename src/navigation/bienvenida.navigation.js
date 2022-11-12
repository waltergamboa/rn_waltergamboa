import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bienvenida from "../screens/bienvenida";
import NuevoJugador from "../screens/nuevo-jugador";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

const BienvenidaNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Bienvenida"
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
                name="Bienvenida"
                component={Bienvenida}
                options={({ navigation }) => ({
                    title: "Inicio",
                  })}                
            />

            <Stack.Screen
                name="Jugador"
                component={NuevoJugador}
            />

        </Stack.Navigator>
    )
}

export default BienvenidaNavigator;