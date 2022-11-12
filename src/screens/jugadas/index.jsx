import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { deleteJugadas, getJugadas } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux"

import JugadasItem from "../../components/jugadas-item";
import { styles } from "./styles";

const Jugadas = ({navigation}) => {
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.jugadas.list);

    useEffect(
        () => {
            dispatch(getJugadas());
        }, [dispatch]
    );

    const onEliminar = (id)=>{
        dispatch(deleteJugadas(id));
      }

    const renderItem = ({item}) => <JugadasItem item={item} onEliminar={onEliminar}></JugadasItem>

        
    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay jugadas</Text>
        </View>
      );

    return (
      <>
      <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Terminadas</Text>
    </View>

        <FlatList 
                data={result}
                renderItem={renderItem}
                keyExtractor={item => item?.id?.toString()}
                ListEmptyComponent={ListEmptyComponent}
            />
            </>
    )
};

export default Jugadas;