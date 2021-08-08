import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    height: (height * 12) / 100,
    width: '100%',
    backgroundColor: '#232F3E',
    justifyContent: 'center',
  },
  imagesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: (height * 2) / 100,
  },
  logoImage: {
    height: (height * 3.5) / 100,
    width: (width * 25.5) / 100,
    marginLeft: (width * 5.5) / 100,
  },
  loaderIcon: {
    height: (height * 3) / 100,
    width: (width * 6.5) / 100,
    marginRight: (width * 5.5) / 100,
  },
});
export default styles;
