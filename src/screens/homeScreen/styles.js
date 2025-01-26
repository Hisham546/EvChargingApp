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

})

export default styles;