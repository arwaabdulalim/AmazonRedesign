import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: (height * 8) / 100,
    backgroundColor: '#232F3E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginVertical: (height * 0.5) / 100,
  },
  errorMessage: {
    color: 'red',
    paddingLeft: (width * 5) / 100,
    paddingTop: (height * 0.5) / 100,
  },
});
export default styles;
