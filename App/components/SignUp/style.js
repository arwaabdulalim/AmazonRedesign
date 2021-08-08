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
  login: {color: 'white', fontSize: 16, fontWeight: '500'},
  loginText: {textTransform: 'uppercase', fontWeight: 'bold', color: 'white'},
  termsView: {
    flexDirection: 'row',
    marginHorizontal: (width * 5) / 100,
    paddingTop: (height * 3) / 100,
    alignItems: 'center',
  },
  boxView: {
    paddingRight: (width * 4) / 100,
  },
  checkBox: {
    width: (width * 6.5) / 100,
    height: (height * 3) / 100,
    backgroundColor: '#f1f6fc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textView: {marginTop: (height * 8) / 100},
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: '#505b67',
    marginHorizontal: (width * 15) / 100,
    marginVertical: (height * 1.3) / 100,
  },
  continueView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: (height * 2) / 100,
  },
  lineView: {
    width: 100,
    height: 1,
    backgroundColor: 'lightgray',
    marginHorizontal: (width * 5) / 100,
  },
  continueText: {color: '#a0aab6', fontSize: 15},
  imageView: {flexDirection: 'row', justifyContent: 'center'},
  image: {marginHorizontal: (width * 7) / 100},
  errorMessage: {
    color: 'red',
    paddingLeft: (width * 5) / 100,
    paddingTop: (height * 0.5) / 100,
  },
});
export default styles;
