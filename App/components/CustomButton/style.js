import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    top: 110,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: (height * 15) / 100,

    maxHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 10,
  },
  button: {
    height: (height * 5.5) / 100,
    width: (width * 55) / 100,
    backgroundColor: '#f69b32',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (height * 1.5) / 100,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    backgroundColor: '#f9f9fc',
    height: (height * 5) / 100,
    width: (width * 10) / 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
});
export default styles;
