import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { datosJugador, eliminarJugador, seleccionarJugador, selectJugador } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux"

import { Ionicons } from "@expo/vector-icons";
import JugadorItem from "../../components/jugador-item";
import SelectorImagen from "../../components/selector-imagen";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";

const Jugadores = ({navigation}) => {
    const dispatch = useDispatch();
    const jugadores = useSelector((state)=>state.jugadores.jugador);
    const jugadorSeleccionado = useSelector((state)=>state.jugadores.seleccionado);

    useEffect(
        () => {
            dispatch(selectJugador());
        }, [dispatch]
    );

    const onEliminar = (id)=>{
      dispatch(eliminarJugador(id));
    }

    const onSeleccionar = (id, name) => {
      dispatch(seleccionarJugador(id, name));
    }

    const renderItem = ({item}) => <JugadorItem item={item} onSeleccionar={onSeleccionar}></JugadorItem>            
    
    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay jugadores</Text>
        </View>
      );

      const mostrarJugadorSeleccionado = () => {
        return (jugadorSeleccionado[0]?.name)  ? <View style={styles.emptyContainer}><Text style={styles.emptyText}>Seleccionado: {jugadorSeleccionado[0]?.name}</Text></View> : <View style={styles.emptyContainer}><Text style={styles.emptyText}>Seleciona un jugador...</Text></View>
      }
      
  return (
<>
{mostrarJugadorSeleccionado()}

        <FlatList 
        style={styles.container}
                data={jugadores}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ListEmptyComponent={ListEmptyComponent}
            />
  </>  
  
  );
};

export default Jugadores;
