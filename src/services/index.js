
import { Alert, PermissionsAndroid,Platform } from "react-native";

export const requestStoragePermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
        const permission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Storage Permission',
                message: 'This app needs access to your storage to save screenshots',
                buttonPositive: 'Allow',
                buttonNegative: 'Deny',
            }
        );

        if (permission === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Storage permission granted');
            return true;
        } else {
            Alert.alert('Permission Denied', 'Storage permission is required to save the screenshot.');
            return false;
        }
    }
    return true;
};

export const locationPermission = async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert('Permission Denied', 'Location access is required.');
            return;
        }
    }
};
