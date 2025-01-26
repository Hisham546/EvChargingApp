import { View, Text } from "react-native"
import styles from "./styles";

import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";




const HomeScreen = () => {


    return (

        <View style={styles.container}

        >


            <View style={styles.calendarView}></View>
            <View style={styles.centerView}>


            </View>
        </View>
    )
}

export default HomeScreen;