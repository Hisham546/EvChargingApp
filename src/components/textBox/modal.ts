import { Dimensions, Text, TouchableOpacity, TextInput, View, TextStyle, ViewStyle, KeyboardTypeOptions } from "react-native";


export interface TextInputOutlinedProps {
    headingLabel?: string;
    onChangeText: (text: string) => void;
    value: string;
    placeholderText?: string;
    labelstyle?: TextStyle;
    parentContaineStyle?: ViewStyle;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    showLabel?: boolean;
    inputWrapperStyle?: ViewStyle;
    textInputStyle?: TextStyle;
    editable?: boolean;
    countryCode?: boolean;
    isError?: boolean;
    maxLength?: number;
    defaultCountryCode?: string;
    onChangeCountryCode?: (code: string) => void;
}