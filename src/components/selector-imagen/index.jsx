import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-file-system";
import { styles } from "./styles";
import colors from "../../constants/colors";
import { useSelector, useDispatch} from "react-redux"

import * as FileSystem from "expo-file-system";

const SelectorImagen = ({onHandleImagen})=>{
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const verifyPermissions = async () =>{
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted"){
            Alert.alert("Permiso denegado", "Necesitamos permisos para usar la camara", [{ text: "Ok" }]);
            return false;
        }
        return true;
    }

    const onHandleTakeImage = async () => {
        const isCameraPermission = await verifyPermissions();
        if (!isCameraPermission) return;
    
        const image = await ImagePicker.launchCameraAsync({
          aspect: [16, 9],
          quality: 0.7,
        });
   
        setImagenSeleccionada(image.uri);
        onHandleImagen(image.uri);
      };

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
            {!imagenSeleccionada ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
            <Image 
                style={styles.image}
                source={{ uri: imagenSeleccionada }}>
            </Image>
        )}
          
            </View>
            <Button
            style={styles.button}
                title="Tu Imagen"
                color={colors.tertiary}
                onPress={onHandleTakeImage}>
            </Button>
        </View>
    )
}

export default SelectorImagen;
