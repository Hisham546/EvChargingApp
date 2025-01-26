import { Dimensions, Text, TouchableOpacity, TextInput, View, TextStyle, ViewStyle, KeyboardTypeOptions } from "react-native";


export interface ButtonProps {
    buttonText?: string,
    textStyle?: TextStyle,
    onPress?:()=> void,
    loaderSize?: number,
    loaderColor?: string,
    loading?: boolean,
    buttonStyle?: TextStyle
}
