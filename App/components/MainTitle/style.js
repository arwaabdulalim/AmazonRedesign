import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  categoryView: {
    marginLeft: (width * 5) / 100,
    marginRight: (width * 3) / 100,
    marginBottom: (height * 2.5) / 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#232f3e',
  },
});
export default styles;
