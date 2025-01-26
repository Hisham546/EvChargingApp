import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, ActivityIndicator, View, TextInput } from "react-native";
import { theme } from "../../styles";
import styles from "./styles";

import { TextInputOutlinedProps } from "./modal";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const TextInputOutlined: React.FC<TextInputOutlinedProps> = (props) => {
    const {

        headingLabel,
        onChangeText,
        value,
        placeholderText,
        labelstyle,
        parentContaineStyle,
        keyboardType,
        secureTextEntry = false,
        showLabel = false,
        inputWrapperStyle,
        textInputStyle,
        editable = true,
        countryCode = false,
        isError = false,
        maxLength,
        defaultCountryCode = '+91',
        onChangeCountryCode
    } = props
    const [secure, setSecure] = useState(secureTextEntry)

    // ,
    // borderTopLeftRadius,

    return (
        <View style={[styles.TextInputContainer, parentContaineStyle,]}>
            {showLabel ?
                <View style={styles.headingLabelView}>
                    <Text style={[styles.headingLabelStyle, labelstyle]}>{headingLabel}</Text>
                </View>
                : null}
            <View style={[styles.inputWrapper, inputWrapperStyle,
            // { borderTopLeftRadius: countryCode ? 1 : 0 },
            // { borderBottomLeftRadius: countryCode ? 1 : 0 },
            ]}>

           
                <TextInput
                    style={[styles.textInputStyle, textInputStyle, countryCode && styles.textInputWithCountryCode, isError && { borderColor: theme.colors.red }]}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholderText}
                    placeholderTextColor={theme.colors.WHITE}
                    keyboardType={keyboardType}
                    secureTextEntry={secure}
                    editable={editable}
                    maxLength={maxLength}
                    autoFocus={true}

                />



            </View>
        </View >
    )

}
