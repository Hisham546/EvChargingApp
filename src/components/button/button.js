import React from "react";
import { Dimensions, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import { theme } from "../../styles";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const ButtonComponent = (props) => {
    const {
        buttonText,
        textStyle,
        onPress,

        loaderSize,
        loaderColor,
        loading,
        buttonStyle
    } = props

    return (
        <TouchableOpacity activeOpacity={0.75}
            onPress={onPress}
            style={[styles.buttonContainer, buttonStyle]}>
            <MaterialIcon name="cellphone-screenshot" size={25} color="white" style={styles.notifyIcon} />
            {/* {loading === true ?
                <ActivityIndicator
                    size={loaderSize ? loaderSize : 'small'}
                    color={loaderColor ? loaderColor : theme.colors.BLACK}
                />
                :
                <Text style={textStyle}>{buttonText}</Text>
            } */}
        </TouchableOpacity>


    )

}
