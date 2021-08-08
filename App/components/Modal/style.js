import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'},

  modalContainer: {
    width: (width * 71) / 100,
    height: (height * 45) / 100,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: (height * 2.5) / 100,
    borderRadius: 20,
    elevation: 20,
    alignItems: 'center',
  },
  modalView: {marginVertical: '50%', alignItems: 'center'},
  modalImage: {
    width: (width * 41) / 100,
    height: (height * 14) / 100,
    marginBottom: (height * 2.5) / 100,
  },
  success: {
    color: '#232f3e',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: (height * 1.5) / 100,
  },
  modalText: {
    color: '#92a0b2',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  lastLine: {position: 'absolute', bottom: 15},
});
export default styles;
