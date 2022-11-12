import EndGame from "../screens/end-game";
import Game from "../screens/game";
import Juegos from "../screens/juegos";
import PlayGame from "../screens/play-game";
import React from "react";
import colors from "../constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const GameNavigator = ()=>{
    return (
        <Stack.Navigator initialRouteName="Juegos"
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.tertiary
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
                fontFamily: 'Raleway-Bold',
            },
        }}>
            <Stack.Screen name="Juegos" component={Juegos}/>
            <Stack.Screen name="Juego" component={Game}/>
            <Stack.Screen name="Jugar" component={PlayGame}/>
            <Stack.Screen name="Fin" component={EndGame}/>            
        </Stack.Navigator>
    )
}

export default GameNavigator;