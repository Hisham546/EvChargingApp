import { View, Text, ScrollView, PermissionsAndroid, Platform, FlatList } from "react-native"
import styles from "./styles";
import { useEffect, useState, useRef } from "react";
import MapComponent from "../../components/maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_PLACES_API_KEY, GOOGLE_MAPS_API_KEY } from '@env';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = (props) => {

    const { onPlaceSelected, region, currentLocation, markers } = props



    return (

        <View style={styles.container} >
            <MapComponent
                markers={markers}
                region={region}
                currentLocation={currentLocation}
                onPlaceSelected={onPlaceSelected}

            />
        </View>

    )
}

export default HomeScreen;