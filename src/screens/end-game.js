import { Button, Image, StyleSheet, Text, View } from "react-native";
import { React, useState } from "react";

import MapPreview from "../components/map-preview";
import { colors } from "../constants/colors";
import { useSelector } from "react-redux"

const styles = StyleSheet.create({
    container: {
      //  flex: 1,
        //padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: "Raleway-Bold",
        color: colors.secondary,
        marginTop: 10
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    respuestaContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",        
        width: "100%",
   //     marginTop: 70, 
        //marginLeft: 7
    },
    imagen: {
        marginTop: 10,
        width: 40, 
        height: 40
    },
    respuesta: {
        marginTop: 40
    }    
})

const EndGame = ({ navigation })=>{
    const pais = useSelector((state)=>state.paises.selected);
    const capital = useSelector((state)=>state.capitales.selected);
    const correctoIncorrecto = useSelector((state)=>state.capitales.correctoIncorrecto);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Validar Respuesta</Text>
            <View style={styles.respuestaContainer}>
            {correctoIncorrecto ? (
            <>
            <Image  source={require("../../assets/correcto.png")} 
                style={styles.imagen}
                />
            <Text>Correcto</Text>
            </>)
            :
            (<>
                <Image source={require("../../assets/incorrecto.png")} 
                style={styles.imagen}
                />
            <Text>Incorrecto</Text>
            </>)
}
            </View>
            {!correctoIncorrecto ?
            (<View style={styles.respuesta}>
                <Text >La respuesta correcta es: {capital}</Text>
            </View>):             (<View style={styles.respuesta}>
                <Text >{capital}</Text>
            </View>)}
         <View style={styles.buttonContainer}>
            <Button title="Volver" onPress={()=>navigation.navigate("Juego")} color={colors.tertiary}></Button>
            </View>
        </View>
    )
}

export default EndGame;