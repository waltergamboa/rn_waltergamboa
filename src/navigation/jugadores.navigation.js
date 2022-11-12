import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Jugadores from "../screens/jugadores"
import NuevoJugador from "../screens/nuevo-jugador";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

const JugadoresNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Jugadores"
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
                name="Jugadores"
                component={Jugadores}
                options={({ navigation }) => ({
                    title: "Jugadores",
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.navigate("Jugador")}>
                        <IonicIcons name="person-add-outline" size={25} color={colors.white} />
                      </TouchableOpacity>
                    ),
                  })}                
            />

            <Stack.Screen
                name="Jugador"
                component={NuevoJugador}
            />

        </Stack.Navigator>
    )
}

export default JugadoresNavigator;