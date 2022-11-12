import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import JuegosItem from "../../components/juegos-item";
import JugadasItem from "../../components/jugador-item";
import { selectCategorias } from "../../store/actions";
import { styles } from "./styles";

const Juegos = ({navigation}) => {
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.categorias.list);
    const jugadorSeleccionado = useSelector((state)=>state.jugadores.seleccionado);

    useEffect(
        () => {
            dispatch(selectCategorias());
        }, [dispatch]
    );

 
    const renderItem = ({item}) => <JuegosItem item={item}></JuegosItem>
    

        
    const ListEmptyComponent = () => (
        <View >
          <Text >No hay juegos</Text>
        </View>
      );

    return (
        <View >
                 {jugadorSeleccionado[0] ? 
    (<View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Jugando: {jugadorSeleccionado[0].name}</Text>
    </View>)
    :
    (      <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Selecciona un jugador</Text>
    </View>)
  }
        <FlatList 
                data={result}
                renderItem={renderItem}
             //   keyExtractor={item => item.id.toString()}
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>
    )
};

export default Juegos;