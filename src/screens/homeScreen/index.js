import { View, Text, ScrollView } from "react-native"
import styles from "./styles";
import { useEffect, useState, useRef } from "react";

import MapComponent from "../../components/maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_PLACES_API_KEY,GOOGLE_MAPS_API_KEY } from '@env';


const HomeScreen = () => {

    const [markers, setMarkers] = useState([]);
    const mapRef = useRef(null);
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });

    const fetchEVChargingStations = async (latitude, longitude) => {
        console.log(latitude,longitude)
        const radius = 5000; // Radius in meters
        const type = 'electric_vehicle_charging_station';
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${GOOGLE_MAPS_PLACES_API_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results) {
                const evMarkers = data.results.map((place) => ({
                    id: place.place_id,
                    name: place.name,
                    location: {
                        latitude: place.geometry.location.lat,
                        longitude: place.geometry.location.lng,
                    },
                }));
                setMarkers(evMarkers);
            } else {
                console.log('No EV charging stations found.');
            }
        } catch (error) {
            console.error('Error fetching EV charging stations:', error);
        }
    };

    const onPlaceSelected = (data, details) => {
        const { geometry } = details;
        setRegion({
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
      //  fetchEVChargingStations(geometry.location.lat, geometry.location.lng);
    };

    return (

        <View style={styles.container} >



            <MapComponent
            
            
            markers={markers}
                mapRef={mapRef}
                region={region}
                onPlaceSelected={onPlaceSelected}
            />
        </View>



    )
}

export default HomeScreen;