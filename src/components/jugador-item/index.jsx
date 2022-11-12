import { Image, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import colors from "../../constants/colors";
import { styles } from "./styles";

const JugadorItem = ({ item, onSeleccionar }) => {
    return (
            <TouchableOpacity style={styles.container} onPress={() => onSeleccionar(item.id, item.name)}>
            <Image style={styles.image} source={{uri: item.image}}></Image>  
            <View style={styles.info}>
                    <Text style={styles.title}>{item.name}</Text>
                    </View>
                <Ionicons name="checkmark-circle" size={24} color={colors.white} />
            </TouchableOpacity>
    )
}

export default JugadorItem;