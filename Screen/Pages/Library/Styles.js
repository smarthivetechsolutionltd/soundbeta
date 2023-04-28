import { StatusBar, StyleSheet } from "react-native";
const statusBarHeight = StatusBar.currentHeight;

export const Colors = {
    White: "#ffffff",
    Primary: "#121933",
    Secondary: "#A299FF",
    InActive: "#8B8AC1",
    TextColor: "#121933",
    Grey: "#ECEBFF",
};

const { White, Primary, Secondary, TextColor, Grey, InActive } = Colors;

const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Primary,
        // padding: 20,
        paddingTop: statusBarHeight,
    },
});
export default styles;
