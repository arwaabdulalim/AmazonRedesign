import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: (height * 40) / 100,
    width: '100%',
    backgroundColor: '#f9f9fc',
  },
  image: {
    height: (height * 32.5) / 100,
    width: (width * 70.5) / 100,
  },
  secondView: {
    marginLeft: (width * 5.5) / 100,
  },
  infoView: {
    backgroundColor: '#fff',
    height: (height * 30) / 100,
    width: '100%',
    paddingLeft: (width * 4) / 100,
  },
  ratingView: {
    marginTop: (height * 2.5) / 100,
    marginBottom: (height * 1) / 100,
    flexDirection: 'row',
  },
  ratingText: {
    color: '#f6c232',
    fontSize: 14,
  },
  category: {
    color: '#232f3e',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: (height * 1) / 100,
  },
  brand: {color: 'gray', fontSize: 16},
  price: {
    color: '#3c4d61',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: (height * 1) / 100,
  },
  details: {
    color: '#92a0b2',
    fontSize: 14,
  },
  downArrow: {
    alignItems: 'center',
  },
});
export default styles;
