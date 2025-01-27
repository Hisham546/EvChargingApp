
import React, { useEffect, useState } from 'react';
import HomeScreen from '../../screens/homeScreen';
import { PermissionsAndroid, Platform, Alert } from "react-native"
import { GOOGLE_MAPS_PLACES_API_KEY, GOOGLE_MAPS_API_KEY } from '@env';
import Geolocation from '@react-native-community/geolocation';
const HomeScreenContainer = ({ ...props }) => {

    const { navigation } = props

    const [markers, setMarkers] = useState([]);

    const [currentLocation, setCurrentLocation] = useState(null);

    const [region, setRegion] = useState({
        latitude: 9.9816358,
        longitude: 76.2998842,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });



    const fetchEVChargingStations = async (latitude, longitude) => {

        const radius = 5000; // Radius in meters
        const type = 'EV+charging';
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=${type}&key=${GOOGLE_MAPS_PLACES_API_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results) {

                const evMarkers = data.results.map((place) => ({
                    id: place.place_id,
                    name: place.name,
                    vicinity: place.vicinity,
                    rating: place.rating,
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
        console.log(details)
        const { geometry } = details;
        setRegion({
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
        fetchEVChargingStations(geometry.location.lat, geometry.location.lng);
    };




    const getCurrentLocation = async () => {

        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert('Permission Denied', 'Location access is required.');
                return;
            }
        }

        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation({
                    latitude,
                    longitude,
                });
            },
            (error) => {
                console.error("Location error:", error);
                Alert.alert("Error", "Unable to fetch location. Ensure GPS is enabled.");
            },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
            }
        );
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);



    return (

        <HomeScreen
            {...props}
            onPlaceSelected={onPlaceSelected}
            markers={markers}
            currentLocation={currentLocation}
            region={region}




        />
    )

}



export default (HomeScreenContainer);