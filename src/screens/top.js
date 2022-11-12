import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { deleteJugadas, getJugadas } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

import JugadasItem from "../components/jugadas-item";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";

//import { styles } from "./styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    // alignItems: "center",
    // marginTop: 30
  },
  title: {
    fontSize: 16,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
  containerButton: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
  },
  fecha: {
    marginTop: 10,
  },
  nombre: {
    marginTop: 12,
    color: "red",
    fontWeight: "bold",
    fontSize: 22,
  },
});

const Top = ({ navigation }) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.jugadas.list);

  useEffect(() => {
    dispatch(getJugadas());
  }, [dispatch]);

  const formDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  const mejorJugada = () => {
    if (result) {
      const maxValue = Math.max(...result.map((x) => parseInt(x.puntos)));
      const mejor = result.filter((x) => parseInt(x.puntos) == maxValue);

      const retornar = (
        <>
          <View>
            <Text style={styles.fecha}>{formDate(mejor[0]?.date)}</Text>
          </View>
          <View>
            <Text style={styles.nombre}>{mejor[0]?.nombre}</Text>
          </View>
          <View>
            <Text>{mejor[0]?.puntos} Puntos</Text>
          </View>
          <Image
            style={styles.image}
            source={require("../../assets/podio.png")}
          ></Image>
        </>
      );
      return retornar;
    } else {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay jugadas</Text>
        </View>
      );
    }
  };
  return (
    <>
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>La mejor jugada</Text>
        {mejorJugada()}
      </View>
    </>
  );
};

export default Top;
