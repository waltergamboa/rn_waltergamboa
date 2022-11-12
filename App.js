import React, { useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";
import { borrarJugador, init } from "./src/db";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cee0dc',
  },
});

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.", err);
  });

  export default function App() {
  const [loaded] = useFonts({
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
    "Raleway-Italic": require("./assets/fonts/Raleway-Italic.ttf")
  })

  if (!loaded){
    return <ActivityIndicator/>
  }

  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

