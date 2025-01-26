import { Dimensions, Platform, StatusBar } from 'react-native';

const deviceDimensions = {
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height,

};
export default deviceDimensions;