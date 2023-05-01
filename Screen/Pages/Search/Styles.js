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

    eachfile: {
        backgroundColor: '#4C4C4C',
        padding: 10,
        marginTop: 2,
        marginBottom: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },


    img: {
        height: 50,
        width: 50,
        borderRadius: 2,
        marginRight: 10,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: White
    },

    controlContainer: {
        flex: 1,
        // backgroundColor: Secondary,
        backgroundColor: Primary,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: '16%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        // paddingBottom: 25,
        justifyContent: 'space-between',
    },

    homepageContainer: {
        height: '84%',
        width: '100%',
    },

    flex2: {
        backgroundColor: White,
        width: '60%',
        alignItems: 'center',
        margin: 6,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 5
    },

    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        textAlign: 'left',
        padding: 5
    },
});
export default styles;