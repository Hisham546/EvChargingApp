import { StyleSheet } from "react-native";


import { theme } from "../styles";
import deviceDimensions from "../utils/DeviceDimensions";
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },

    calendarView: {
        width: deviceDimensions.deviceWidth,
        height: deviceDimensions.deviceHeight * 0.20,
        //  backgroundColor: theme.colors.BLUE
    },
    centerView: {
        width: deviceDimensions.deviceWidth,
        height: deviceDimensions.deviceHeight,
      


    },
    habitsListView: {
        width: deviceDimensions.deviceWidth,
        height: deviceDimensions.deviceHeight * 0.11,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    

    },
    habitCards: {
        width: deviceDimensions.deviceWidth * 0.80,
        height: deviceDimensions.deviceHeight * 0.09,
        borderRadius:5,
        elevation:0.5,
        backgroundColor:theme.colors.WHITE,
        shadowOpacity:3,      
        marginTop: '5%',
        justifyContent: 'center',
    


    },


})

export default styles;