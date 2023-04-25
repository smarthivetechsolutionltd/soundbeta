import { StyleSheet } from "react-native";

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
    navContainer: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10,
        justifyContent: 'space-between',
    },

    eachNav: {
        alignItems: 'center',
    },

    navTxt: {
        color: White,
        textAlign: 'center',
        fontSize: 12
    }
});

export default styles;