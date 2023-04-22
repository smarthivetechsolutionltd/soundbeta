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
        // backgroundColor: Secondary,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between',
    },

    eachNav: {
        alignItems: 'center',
        padding: 10,
    },

    navTxt: {
        color: White,
        textAlign: 'center',
        fontSize: 12
    }
});

export default styles;