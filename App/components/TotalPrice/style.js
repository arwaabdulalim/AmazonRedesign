import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  brand: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '400',
  },

  totalView: {
    height: (height * 10) / 100,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: (width * 2.7) / 100,
    marginVertical: (width * 2) / 100,
  },
  total: {
    color: '#3c4d61',
    fontSize: 18,
    fontWeight: '500',
  },
});
export default styles;
