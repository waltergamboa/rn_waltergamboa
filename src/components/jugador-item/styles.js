import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        backgroundColor: colors.tertiary,
        height: 90,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
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
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 20,
        //backgroundColor: colors.background,
      },
      info: {
        marginLeft: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
      },
      title: {
        fontSize: 16,
        color: colors.white,
        marginBottom: 10,
      },
});