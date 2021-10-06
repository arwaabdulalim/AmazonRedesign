import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  flatView: {
    height: (height * 31) / 100,
    width: (width * 39) / 100,
    marginLeft: (width * 5) / 100,
    marginRight: (width * 5) / 100,
    marginBottom: (height * 1.7) / 100,
  },
  imageContainer: {
    backgroundColor: '#f2f3f6',
    height: (height * 18) / 100,
    width: (width * 39) / 100,
    marginBottom: (height * 2) / 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  flatImage: {
    height: (height * 13) / 100,
    width: (width * 39) / 100,
    justifyContent: 'center',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  stars: {
    marginRight: (width * 9) / 100,
  },
  textView: {
    justifyContent: 'center',
  },
  type: {
    color: '#232f3e',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: (height * 1) / 100,
  },
  brand: {color: 'gray', fontSize: 12, marginTop: (height * 1) / 100},
  price: {
    color: '#3c4d61',
    fontSize: 15,
    fontWeight: '600',
    marginTop: (height * 1) / 100,
  },
});
export default styles;
