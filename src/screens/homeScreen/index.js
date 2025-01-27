import { View } from "react-native"
import styles from "./styles";
import { MapComponent } from "../../components/index";

const HomeScreen = (props) => {

    const { onPlaceSelected, region, currentLocation, markers,takeScreenshot,viewShotRef  } = props



    return (

        <View style={styles.container} >
            <MapComponent
                markers={markers}
                region={region}
                currentLocation={currentLocation}
                onPlaceSelected={onPlaceSelected}
                takeScreenshot={takeScreenshot}
                viewShotRef ={viewShotRef }

            />
        </View>

    )
}

export default HomeScreen;