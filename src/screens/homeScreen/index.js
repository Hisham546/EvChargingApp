import { View } from "react-native"
import styles from "./styles";
import { MapComponent } from "../../components/index";

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