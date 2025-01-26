import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_PLACES_API_KEY } from '@env';

export default function MapComponent(props) {
    const { region, onPlaceSelected ,mapRef,markers} = props;

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
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
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            alignItems: 'center',
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
            </View>

            <MapView
               ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                zoomEnabled={true}
             
            >
                  {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={marker.location}
                        title={marker.name}
                    />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start", // Place search bar at the top
        alignItems: "center",
    },
    searchContainer: {
        position: 'absolute',
        top: 10,
        left: '5%',
        right: '5%',
        zIndex: 1, // Ensures search bar is on top
        width: '90%',
    },
    searchBar: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 15,
        color:'black',
        width: '100%', // Ensure it stretches across its container
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
