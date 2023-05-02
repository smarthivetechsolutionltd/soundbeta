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
    mainContainer: {
        backgroundColor: "#121933",
        flex: 1,
        paddingTop: 40
    },

    upperContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },

    nameFav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
        padding: 20,
    },

    imageContainer: {
        // backgroundColor: "white",
        padding: 20,
    },

    img: {
        height: 350,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: 'center',
    },

    nameCont: {
        padding: 20
    },

    musicName: {
        fontSize: 26,
        color: "white",
        fontWeight: 800
    },

    musicArtist: {
        fontSize: 12,
        color: "white",
        marginTop: 5
    },

    bar: {
        backgroundColor: "#A299FF",
        padding: 5,
        borderRadius: 10,
    },

    controlContainer: {
        flex: 1,
        backgroundColor: "#121933",
        width: '100%',
        position: 'absolute',
        bottom: 0,
        // height: '16%',
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    flex: {
        backgroundColor: "#121933",
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    flex1: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },

    playBtn: {
        backgroundColor: White,
        height: 70,
        width: 70,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
