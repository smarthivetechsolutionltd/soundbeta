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
    container: {
        flex: 1,
        backgroundColor: Primary,
        paddingTop: 40,
        paddingLeft: 15,
        paddingRight: 15,
    },

    innerContainer: {
        flex: 1,
        width: '100%',
        alignitems: 'center',
    },

    bigTxt: {
        fontSize: 27,
        fontWeight: 400,
        color: White,
        marginTop: 30
    },

    textInput: {
        backgroundColor: White,
        padding: 6,
        borderRadius: 8,
        marginTop: 5
    },

    arrayContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        padding: 10,
        marginTop: 17,
        justifyContent: 'space-between',
    },

    eachArrayContainer: {
        // padding: 10,
        marginTop: 20,
    },

    centerinParent: {
        alignSelf: 'center',
        height: '50%',
        // marginTop: 100,
    },

    eachItem: {
        paddingBottom: 6,
        // paddingLeft: 2,
        paddingRight: 2,
        marginBottom: 10,
        alignItems: 'center',
    },


    imgCirc: {
        height: 100,
        width: 100,
        borderRadius: 200,
        backgroundColor: White,
    },

    textSmall: {
        color: White,
        fontSize: 12,
        marginTop: 10
    },


    artistImg: {
        backgroundColor: White,
        height: 100,
        width: 100,
        borderRadius: 100,
        padding: 20,
    },

    skipBtn: {
        position: 'absolute',
        bottom: 40,
        backgroundColor: White,
        right: 30,
        borderRadius: 10,
        padding: 10
    }
});

export default styles;