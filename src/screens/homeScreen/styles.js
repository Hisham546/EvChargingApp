import { StyleSheet } from "react-native";


import { theme } from "../../styles";
import deviceDimensions from "../../utils/DeviceDimensions";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    searchBar: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 15,
        color: 'black', // Input text color
    },
    evStationCard: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 8,
        marginRight: 10,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    flatListContainer: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
        paddingVertical: 5,
    },

})

export default styles;