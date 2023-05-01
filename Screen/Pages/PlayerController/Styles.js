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
    controllContainer: {
        flex: 1,
        backgroundColor: '#4E4C55',
        width: '97%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 10,
        // paddingLeft: 10,
        // paddingTop: 10,
        // paddingRight: 10,
        // marginBottom: 12,
        borderRadius: 3,
        justifyContent: 'space-between',
    },

    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        flexWrap: 'wrap', 
    },

    img: {
        width: 50,
        height: 50,
        // backgroundColor: White,
        marginRight: 9,
        borderRadius: 7,
    },

    txtBig: {
        fontSize: 14,
        color: White,
        textAlign: 'center',
        fontWeight: 500,
        width: 120,
    },

    txt: {
        color: White,
        textAlign: 'center',
        fontSize: 10,

    },

    eachItem: {
        marginRight: 10,
    }
})

export default styles;
