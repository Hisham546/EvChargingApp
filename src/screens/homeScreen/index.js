import { View, Text } from "react-native"
import styles from "./styles";

import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";

import MapComponent from "../../components/maps";
import MapView from "react-native-maps";

const HomeScreen = () => {


    return (

        <View style={styles.container}

        >


            <View style={styles.calendarView}></View>
            <View style={styles.centerView}>
                <MapView
                    style={styles.map}
                    //specify our coordinates.
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />

            </View>
        </View>
    )
}

export default HomeScreen;