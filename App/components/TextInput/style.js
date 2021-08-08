import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  fieldHeader: {
    color: '#3c4d61',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: (width * 5) / 100,
    paddingVertical: (height * 1.5) / 100,
  },

  inputFieldView: {
    height: (height * 6) / 100,
    width: (width * 90) / 100,
    borderRadius: 10,
    backgroundColor: '#f1f6fc',
    justifyContent: 'space-between',
    marginHorizontal: (width * 5) / 100,
    paddingHorizontal: (width * 5) / 100,
    flexDirection: 'row',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
