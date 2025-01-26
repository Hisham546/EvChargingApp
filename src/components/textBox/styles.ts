import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';
import { theme } from "../../styles";
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    TextInputContainer: {
        height: deviceHeight * 0.14,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',


    },
    textInputStyle: {
        height: deviceHeight * 0.06,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

        width: deviceWidth * 0.80,


        color: theme.colors.WHITE,
        fontFamily: theme.fontFamily.P_REGULAR,
        //textAlign:'justify'
        //  backgroundColor:'red'

    },
    headingLabelView: {
        textAlign: 'left',
        height: deviceHeight * 0.05,
        width: deviceWidth * 0.80,
        justifyContent: 'center'


    },
    headingLabelStyle: {
        color: theme.colors.gray_600
    },
    iconButton: {
        padding: 10,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#ccc',

        borderRadius: 5,
        // backgroundColor:'red'
    },
    eyeArea: {
        position: 'absolute',
        right: 10,
        padding: 10,
    },
    countryCodeView: {
        position: 'absolute',
        width: deviceWidth * 0.08,
        height: deviceHeight * 0.05,
        // justifyContent:'center',
        //left:5,

        // top: 12,
        backgroundColor: 'red'
    },
    countryCodeText: {
        color: theme.colors.DARK_SLATE_GREEN,
        fontFamily: theme.fontFamily.P_REGULAR,
        fontSize: theme.fontSize.h6,
        //  marginLeft:'15%'
    },
    textInputWithCountryCode: {
        paddingLeft: 15, // Adjust as needed
        width: deviceWidth * 0.70,
    },




})
export default styles