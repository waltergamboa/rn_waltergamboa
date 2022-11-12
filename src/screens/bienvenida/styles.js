import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: "40%",
        minHeight: 300,
        width: "100%",
        resizeMode: 'contain'
    },
    bienvenidos: {
        fontFamily: 'Raleway-Bold',
        fontSize: 42,
        color: colors.secondary
    },
    linea: {
        fontFamily: 'Raleway-Regular',
        fontSize: 22,
        paddingTop: 7,
        color: colors.tertiary
    }
})
