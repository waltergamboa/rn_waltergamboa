import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { React, useState } from "react";
import { actualizarPuntaje, correctoIncorrecto, selectCapital, selectPais } from "../store/actions";
import { useDispatch, useSelector } from "react-redux"

import MapPreview from "../components/map-preview";
import { colors } from "../constants/colors";
import { generateRandomNumberBetween } from "../utils/functions";
import { latitud } from "../utils/preguntas-respuestas"
import { longitud } from "../utils/preguntas-respuestas"

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        padding: 10,
        alignItems: 'center',
        height: "40%"
    },
    title: {
        fontSize: 20,
        fontFamily: "Raleway-Bold",
        color: colors.secondary
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    label: {
        fontSize: 14,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 5, 
        fontFamily: 'Raleway-Regular',
    },
    inputContainer: {
        width: 320,
        maxWidth: '80%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        maxWidth: 270,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
        fontFamily: 'Raleway-Regular',
        backgroundColor: colors.secondary,
        borderRadius: 15
    },
    map: {
        height: 300,
        width: "90%"
    },
})

const PlayGame = ({ navigation })=>{
    const [texto, setTexto] = useState("");
    const [indice, setIndice] = useState(generateRandomNumberBetween(0, 11))

    const dispatch = useDispatch();
    const paises = useSelector((state)=>state.paises.paises);
    const capitales = useSelector((state)=>state.capitales.capitales);
    const puntaje = useSelector((state)=>state.puntaje.puntos);


    const onHandleChange = (text) => {
        setTexto(String(text).toLowerCase());
    }

    const onHandleVerificar = ()=>{
        if(texto === ""){
           return;
        }

        let respuesta = false;
        if(texto === capitales[indice].toLowerCase()){
            respuesta = true;
        }

        if(respuesta){
            dispatch(actualizarPuntaje(1))
        }else{
            dispatch(actualizarPuntaje(-1))
        }

        dispatch(selectPais(indice));
        dispatch(selectCapital(indice));
        dispatch(correctoIncorrecto(respuesta));
        navigation.navigate("Fin");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jugando</Text>
            <View>
                <Text style={styles.label}>Pregunta</Text>
                <Text style={styles.label}>Cual es la capital de {paises[indice]}?</Text>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Tu respuesta...</Text>
                <TextInput 
                    style={styles.input} 
                    keyboardType="default"
                    maxLength={20}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text)}
                    value={texto}
                />
                </View>
            </View>
            <MapPreview style={styles.map} location={{ lat: latitud[indice], lng: longitud[indice] }}>
          <Text>Ubicacion no disponible</Text>
        </MapPreview>
            <View style={styles.buttonContainer}>
            <Button title="Volver" onPress={()=>navigation.navigate("Juego")} color={colors.tertiary}></Button>
            <Button title="Verificar" onPress={()=>onHandleVerificar()} color={colors.secondary}></Button>            
            </View>
        </View>
    )
}

export default PlayGame;