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

    homepageContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: Primary,
        padding: 20,
        paddingTop: statusBarHeight,
    },

    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        width: '100%',
    },

    welcTxt: {
        color: White,
        fontSize: 16,
    },

    TxtWhite: {
        color: White,
        fontSize: 16,
        marginTop: 20
    },

    img: {
        height: 80,
        width: 120,
        borderRadius: 2,
        backgroundColor: White,
    },

    imgCirc: {
        height: 100,
        width: 100,
        borderRadius: 200,
        backgroundColor: White,
    },

    eachItem: {
        padding: 6,
        alignItems: 'center',
    },

    textSmall: {
        color: White,
        fontSize: 12,
        marginTop: 10
    },

    flexRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    flexRightItm: {
        marginRight: 18,
    }

});

export default styles;