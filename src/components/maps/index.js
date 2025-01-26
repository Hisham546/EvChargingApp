
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
export default function MapComponent(props) {

    const { region, onPlaceSelected } = props

    return (
        <View style={styles.container}>

            {/* <GooglePlacesAutocomplete
                placeholder="Search"
                onPress={onPlaceSelected}
                query={{
                    key: `${GOOGLE_MAPS_API_KEY}`,
                    language: 'en',
                }}
                styles={{
                    textInputContainer: {
                        backgroundColor: 'grey',
                    },
                    textInput: styles.searchBar,
                }}
            /> */}

            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //   //  position: 'relative',
    // },
    // // searchBar: {
    // //     height: 50,
    // //     marginTop: 20,
    // //     marginHorizontal: 10,
    // //     borderWidth: 1,
    // //     borderColor: 'gray',
    // //     borderRadius: 10,
    // //     paddingLeft: 15,
    // //     position: 'absolute',
    // //     top: 10,
    // //     width: '90%',
    // //     zIndex: 10,
    // // },
    // map: {
    //     ...StyleSheet.absoluteFillObject,
    // },

    container: {
       // ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});