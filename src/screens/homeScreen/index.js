import { View, Text,ScrollView } from "react-native"
import styles from "./styles";
import { useEffect, useState } from "react";

import MapComponent from "../../components/maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_PLACES_API_KEY } from '@env';


const HomeScreen = () => {



    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    });

    const [place, setPlace] = useState(null);

    const onPlaceSelected = (data, details) => {
        // You can get the location details from the API response.
        const { geometry } = details;
        setRegion({
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        });
        setPlace(data.description);
    };
console.log(place,'................place')
    return (

        <View style={styles.container}

        >
        
  
                <GooglePlacesAutocomplete
                    placeholder="Search"
                     onPress={onPlaceSelected}
            
                    query={{
                        key: GOOGLE_MAPS_PLACES_API_KEY,
                        language: 'en',
                    }}
                    fetchDetails={true}
                    listViewDisplayed={true}
                    styles={{
                        textInputContainer: {
                         
                        },
                        textInput: styles.searchBar,
                        listView: {
                            backgroundColor: 'white', 
                            borderRadius: 10,          
                            borderWidth: 1,        
                        },
                        description: {
                            color: 'black',           
                        },
                        predefinedPlacesDescription: {
                            color: 'gray',            
                        }
                       
                    }}
                   
                />
   


                <MapComponent
                region={region}
                 />
            </View>


      
    )
}

export default HomeScreen;