import { Button, Image, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Bienvenida = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image  style={styles.image} source={require("../../../assets/preguntas3.png")}></Image>
            <Text style={styles.bienvenidos}>Bienvenidos!!!!</Text>            
            <Text style={styles.linea}>Juego de Preguntas y Respuestas</Text>            
            <Text style={styles.linea}>Para toda la familia</Text>            
        </View>
    )
}

export default Bienvenida;