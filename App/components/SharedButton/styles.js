import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    top: 120,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    height: (height * 5.5) / 100,
    width: (width * 90) / 100,
    backgroundColor: '#f69b32',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
export default styles;
