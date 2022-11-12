import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { React, useEffect } from "react";
import { agregarJugada, reiniciarPuntaje } from "../store/actions";
import { useDispatch, useSelector } from "react-redux"

import { colors } from "../constants/colors";
import { selectJugador } from "../store/actions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: "Raleway-Bold"
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        borderRadius: 100
    },
emptyContainer: {
  marginVertical: 20,
  alignItems: "center",
  justifyContent: "center",
},
emptyText: {
  fontSize: 18,
  fontWeight: "bold",
  color: colors.secondary
}
})

const Game = ({ navigation })=>{
    const dispatch = useDispatch();
    const puntaje = useSelector((state)=>state.puntaje.puntos);
    const jugadorSeleccionado = useSelector((state)=>state.jugadores.seleccionado);
    const result = useSelector((state)=>state.categorias.list);
    
    useEffect(
        () => {
            dispatch(selectJugador());
        }, [dispatch]
    );


    const onTerminar = ()=>{
        Alert.alert(
            "Juego",
            "Queres terminar el juego?",
            [
              {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
              },
              { text: "Aceptar", onPress: () => {
                if (jugadorSeleccionado[0]?.name){
                    dispatch(selectJugador());
                   dispatch(agregarJugada(jugadorSeleccionado[0].name, parseInt(puntaje)));
                   dispatch(reiniciarPuntaje());
                   navigation.navigate("Juegos");
                }
              } }
            ]
          );
    }

    return (
        <View style={styles.container}>
                    <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>{result}</Text>
        </View>
        <Text style={styles.title}>Puntos acumulados: {puntaje}</Text>
            <View style={styles.buttonContainer}>
            <Button color={colors.secondary} title=" Jugar " onPress={()=>navigation.navigate("Jugar")}></Button>  
            <Button color={colors.secondary} title="Terminar" onPress={onTerminar}></Button>  
            </View>
        </View>
    )
}

export default Game;