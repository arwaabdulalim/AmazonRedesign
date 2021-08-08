import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    height: (height * 11) / 100,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    paddingHorizontal: (width * 5) / 100,
  },
  flatView: {width: (width * 20) / 100},
  textContainer: {width: (width * 60) / 100},
  flatImage: {
    height: (height * 8) / 100,
    width: (width * 17) / 100,
  },

  type: {
    color: '#232f3e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  brand: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '400',
  },
  price: {
    color: '#3c4d61',
    fontSize: 18,
    fontWeight: '600',
  },
});
export default styles;
