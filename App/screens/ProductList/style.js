import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  categoryView: {
    marginTop: (height * 5) / 100,
    marginLeft: (width * 5) / 100,
    marginRight: (width * 3) / 100,
    marginBottom: (height * 3) / 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f1f6fc',
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#232f3e',
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatView: {
    height: (height * 11) / 100,
    width: (width * 38.5) / 100,
    backgroundColor: '#f2f3f6',
    marginLeft: (width * 5) / 100,
    marginRight: (width * 5) / 100,
    marginBottom: (height * 1.7) / 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  flatImage: {
    height: (height * 7) / 100,
    width: (width * 28) / 100,
    marginBottom: (height * 2) / 100,
    justifyContent: 'center',
  },
  categoryText: {
    color: '#92a0b2',
    fontSize: 16,
  },
});
export default styles;
