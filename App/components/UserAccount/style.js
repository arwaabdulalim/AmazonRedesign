import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    height: (height * 23.5) / 100,
    marginHorizontal: (width * 5.5) / 100,
    marginVertical: (height * 1.5) / 100,
    justifyContent: 'center',
    borderRadius: 6,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: (height * 2) / 100,
    paddingHorizontal: (width * 4) / 100,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    color: '#3c4d61',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: (width * 5.5) / 100,
  },
});
export default styles;
