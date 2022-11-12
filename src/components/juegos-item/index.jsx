import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { useNavigation, useRoute } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import colors from "../../constants/colors";
import { styles } from "./styles";

const formDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const JuegosItem = ({ item, onCancel }) => {
    const navigation = useNavigation();
    const jugadorSeleccionado = useSelector((state)=>state.jugadores.seleccionado);

 


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>{item}</Text>
                </View>
                {!jugadorSeleccionado[0]? (
                    null
        ) : (
            <TouchableOpacity onPress={()=>navigation.navigate("Juego")}>
               <Ionicons name="play" size={24} color={colors.white} />
            </TouchableOpacity>
        )}
          
          
            </View>
        </View>
    )
}

export default JuegosItem;