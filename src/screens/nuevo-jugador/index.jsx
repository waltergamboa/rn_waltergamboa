import { Alert, Button, FlatList, Text, TextInput, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { agregarJugada, datosJugador, getJugadas, selectJugador } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux"

import SelectorImagen from "../../components/selector-imagen";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";

const NuevoJugador = ({navigation}) => {
    const dispatch = useDispatch();
    const jugadores = useSelector((state)=>state.jugadores.jugador);    
    
    const [nombreJugador, setNombreJugador] = useState("");
    const [imagen, setImagen] = useState(null);

    useEffect(
        () => {
            dispatch(selectJugador());
        }, [dispatch]
    );

    const onHandleNombreJugador = (texto)=>{
        setNombreJugador(texto);
    }

    const onHandleImagen = (imagen)=>{
        setImagen(imagen);
    }

    const guardar = ()=>{
        if(jugadores.find(item => String(item.name).toLowerCase().trim() === String(nombreJugador).toLowerCase().trim())){
            Alert.alert(
                "Nuevo Jugador",
                "Ya existe un jugador con ese nombre!!!",
                [
                  { text: "Aceptar", onPress: () => {
                    
                 } }
                ]
              );
        } else if (nombreJugador == "") {
            Alert.alert(
                "Nuevo Jugador",
                "Debes completar tu nombre!!!",
                [
                  { text: "Aceptar", onPress: () => {
                    
                 } }
                ]
              );


        } else if(!imagen){
            Alert.alert(
                "Nuevo Jugador",
                "Debes seleccionar una imagen!!!",
                [
                  { text: "Aceptar", onPress: () => {
                    
                 } }
                ]
              );

        }
        else {
       dispatch(datosJugador(nombreJugador, imagen, "a", "b"));
       navigation.navigate("Jugadores");
    }
    }

    const renderItem = ({item}) => <Text>{item.name}</Text>


  return (
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.title}>Para que sepan quien sos!!!</Text>
        <TextInput
          style={styles.input}
          placeholder="Tu nombre para jugar"
          onChangeText={onHandleNombreJugador}
          value={nombreJugador}
        />
        </View>
        <SelectorImagen onHandleImagen={onHandleImagen}></SelectorImagen>
        <View style={styles.containerButton}>
            <Button
                title="Guardar"
                onPress={guardar}>
            </Button>
        </View>
    </View>
  );
};

export default NuevoJugador;
