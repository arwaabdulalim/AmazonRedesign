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
  arrowView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textView: {
    flexDirection: 'row',
  },
  counter: {
    // marginLeft: (width * 15) / 100,
    width: (width * 20) / 100,
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
  totalView: {
    height: (height * 12) / 100,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: (width * 2.7) / 100,
    marginVertical: (width * 3) / 100,
  },
  total: {
    color: '#3c4d61',
    fontSize: 18,
    fontWeight: '500',
  },
});
export default styles;
