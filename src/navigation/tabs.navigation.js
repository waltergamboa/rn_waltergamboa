import BienvenidaNavigator from "./bienvenida.navigation";
import GameNavigator from "./game.navigation";
import { Ionicons } from "@expo/vector-icons";
import JugadasNavigator from "./jugadas.navigation";
import JugadoresNavigator from "./jugadores.navigation";
import React from "react";
import TopNavigator from "./top.navigation";
import { colors } from "../constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="InicioTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Raleway-Bold',
                    color: colors.secondary,
                }
            }}
        >
            <BottomTab.Screen
                name="InicioTab"
                component={BienvenidaNavigator}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'home' : 'home-outline'}
                            size={22}
                            color={colors.tertiary}
                        />
                    )
                }}
            /> 
            <BottomTab.Screen
                name="JugadoresTab"
                component={JugadoresNavigator}
                options={{
                    title: 'Jugadores',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'person' : 'person-outline'}
                            size={22}
                            color={colors.tertiary}
                        />
                    )
                }}
            />             
            <BottomTab.Screen
                name="GameTab"
                component={GameNavigator}
                options={{
                    title: 'Juegos',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'game-controller' : "game-controller-outline"}
                            size={22}
                            color={colors.tertiary}
                        />
                    ),
                }}
            />
             <BottomTab.Screen
                name="JugadasTab"
                component={JugadasNavigator}
                options={{
                    title: 'Jugadas',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'apps' : "apps-outline"}
                            size={22}
                            color={colors.tertiary}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="TopTab"
                component={TopNavigator}
                options={{
                    title: 'Mejores',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'body' : 'body-outline'}
                            size={22}
                            color={colors.tertiary}
                        />
                    )
                }}
            /> 
        </BottomTab.Navigator>
    )
}

export default Tabs;