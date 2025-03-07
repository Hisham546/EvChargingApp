import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, FlatList, Text } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_PLACES_API_KEY, GOOGLE_MAPS_API_KEY } from '@env';
import deviceDimensions from '../../utils/DeviceDimensions';
import { theme } from '../../styles';
import { ButtonComponent } from "../../components/index";
import ViewShot from "react-native-view-shot";
export const MapComponent = (props) => {

    const { region, onPlaceSelected, markers, currentLocation,takeScreenshot,viewShotRef  } = props;




    const renderItem = ({ item }) => {


        return (
            <View style={styles.evStationCard}>
                <Text style={styles.chargingStationName}>{item.name}</Text>
                <Text style={styles.rating}>Rating :{item.rating}</Text>
                <Text style={styles.description}>{item.vicinity}</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    onPress={(data, details = null) => {

                        if (onPlaceSelected) {
                            onPlaceSelected(data, details);
                        }
                    }}
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
                {currentLocation && (
                    <Marker
                        coordinate={currentLocation}
                        title="You Are Here"
                        pinColor={'yellow'}
                    />
                )}
            </MapView>
            <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 0.9 }} style={styles.buttonParent}>
          
                <ButtonComponent
                onPress={()=>{
                    takeScreenshot()
                }} />
           
            </ViewShot>
            <View style={styles.flatlistParent}>
                <FlatList
                    data={markers}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    searchContainer: {
        position: 'absolute',
        top: 10,
        left: '5%',
        right: '5%',
        zIndex: 1,
        width: '90%',

    },
    flatlistParent: {
        position: 'absolute',
        bottom: 10,
        left: '5%',
        right: '5%',
        zIndex: 1,
        width: '90%',
    },
    buttonParent: {
        position: 'absolute',
        bottom: '30%',
        left: '75%',
        right: '5%',
        zIndex: 1,
        width: '90%',
    },
    searchBar: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 15,
        color: 'black',
        width: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    evStationCard: {
        height: deviceDimensions.deviceHeight * 0.25,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 15,
        color: 'black',
        width: deviceDimensions.deviceWidth * 0.45,
        marginRight: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#1e1e26'
    },
    flatListContainer: {
        paddingVertical: 5,
    },
    chargingStationName: {
        color: 'white',
        fontSize: 13,
        fontFamily: theme.fontFamily.P_BOLD
    },
    description: {
        color: 'gray',
        fontSize: theme.fontSize._11,
        margin: 3,
        fontFamily: theme.fontFamily.P_MEDIUM

    },
    rating: {
        color: 'gray',
        fontSize: 11,
        fontFamily: theme.fontFamily.P_MEDIUM

    }
});
