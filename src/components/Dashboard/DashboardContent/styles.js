import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  iconStyle: {
    height: deviceWidth * 0.15,
    width: deviceWidth * 0.15,
    marginTop: 25,
  },
  tileContentStyle: {
    color: '#fff',
    fontSize: deviceWidth * 0.075,
    textAlign: 'center',
    marginBottom: 25,
  },
});
