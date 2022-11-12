import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        backgroundColor: colors.tertiary,
        height: 80,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    headerContainer: {},
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    content: {},
    total: {
        fontSize: 16,
        fontFamily: "Raleway-Bold",
        color: colors.white
    },
});