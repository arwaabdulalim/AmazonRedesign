import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: (height * 8) / 100,
    backgroundColor: '#232F3E',
    justifyContent: 'center',
  },
  profileImage: {
    marginHorizontal: (width * 3.5) / 100,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    paddingRight: (height * 10) / 100,
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
