import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  categoryView: {},
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
    marginBottom: (height * 3) / 100,
  },
  inputFieldView: {
    height: (height * 5.4) / 100,
    width: (width * 89.5) / 100,
    borderRadius: 22,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: (width * 5) / 100,
    bottom: 25,
    shadowColor: '#f2f3f6',
    shadowOpacity: 3,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 1,
    },
  },
  InputField: {
    fontSize: 15,
    paddingRight: (width * 9) / 100,
  },

  searchIcon: {position: 'absolute', left: 25, top: 10},
  cameraIcon: {position: 'absolute', right: 25, top: 10},
});
export default styles;
