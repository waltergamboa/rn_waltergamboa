import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    preview: {
        width: "70%",
        height: 200,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.tertiary,
        borderWidth: 1.5,
        borderRadius: 20,
        marginLeft: 60
      },
})