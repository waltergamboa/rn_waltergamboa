import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import colors from "../../constants/colors";
import { styles } from "./styles";

const formDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const JugadasItem = ({ item, onEliminar }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formDate(item.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>{item.nombre} - Puntos {item.puntos}</Text>
                </View>
            <TouchableOpacity onPress={() => onEliminar(item.id)}>
                <Ionicons name="trash" size={24} color={colors.white} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default JugadasItem;