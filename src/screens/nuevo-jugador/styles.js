import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
    },
    content: {
        alignItems: "center",
        marginTop: 30
        
    },
    title: {
        fontSize: 16
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
        alignItems: "center"
        
    },
})